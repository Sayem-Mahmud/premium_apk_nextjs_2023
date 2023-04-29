import { IResponseApk, IResponseSingleApk } from "../../interfaces/response";
import { callFetch } from "../utils/CallFetch";


export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export interface LoginInterface {
  status: number;
  data: {
    access_token: string | null;
  };
}

export class PremiumApkApi {

  //DEMO API CALLING STRUCTURE
  // static async login(token: string, email: string, fullName: string, avatar: string, tokenType: "google" | "facebook"): Promise<ILoginResponse> {
  //     console.log(token);
  //     console.log(API_ENDPOINT)
  //     const myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  //     const urlencoded = new URLSearchParams();
  //     urlencoded.append("token", token);
  //     urlencoded.append("tokenType", tokenType);
  //     urlencoded.append("email", email);
  //     urlencoded.append("fullName", fullName);
  //     urlencoded.append("avatar", avatar);
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: myHeaders,
  //         body: urlencoded,
  //         redirect: 'follow'
  //     };

  //     return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions)
  // }


  static async getAllApk(pageNumber:number): Promise<IResponseApk> {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return await callFetch(`${API_ENDPOINT}/apks/findAllApk?page=${pageNumber}`, requestOptions)
  }

  static async getSingleApk(id: any): Promise<IResponseSingleApk> {
    console.log("🚀 ~ file: PremiumSourceCodeApi.ts:49 ~ PremiumSourceCodeApi ~ getSingleApk ~ id:", id)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    return await callFetch(`${API_ENDPOINT}/apks/findOneApk/${id}`, requestOptions)
  }




}
