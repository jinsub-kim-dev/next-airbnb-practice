import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

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

    return res.end();
  }
  res.statusCode = 405;

  return res.end();
};
