import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { StoredUserType } from "../../../types/user";
import { format } from "date-fns";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, firstname, lastname, password, birthday } = req.body;
    if (!email || !firstname || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다.");
    }

    const userExist = Data.user.exist({ email });
    if (userExist) {
      res.statusCode = 409;
      res.send("이미 가입된 이메일입니다.");
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const users = Data.user.getList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }
    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/static/image/user/default_user_profile_image.jpg",
    };

    Data.user.write([...users, newUser]);

    await new Promise((resolve) => {
      const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);
      res.setHeader(
        "Set-Cookie",
        `access_token=${token}; path=/; expires=${format(
          new Date(
            Date.now() + 60 * 60 * 24 * 1000 * 3, //3일
          ),
          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
        )}; httponly`,
      );
      resolve(token);
    });

    /**/
    const newUserWithoutPassword: Partial<
      Pick<StoredUserType, "password">
    > = newUser;

    delete newUserWithoutPassword.password;
    res.statusCode = 200;
    return res.send(newUser);
  }
  res.statusCode = 405;

  return res.end();
};
