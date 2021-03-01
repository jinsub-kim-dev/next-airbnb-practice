import axios from "axios";
import { UserType } from "../../types/user";

// 회원가입 body
interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

// 회원가입 api
export const signupAPI = (body: SignUpAPIBody) =>
  axios.post<UserType>("/api/auth/signup", body);

// 로그인 api
export const loginAPI = (body: { email: string; password: string }) =>
  axios.post<UserType>("/api/auth/login", body);
