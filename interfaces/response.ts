
//here we will declare our response interfaces or in easy way type of our all response in our website
import { MyFetchInterface } from "../src/utils/CallFetch";
import { ApkData, User } from "./models";


export interface IResponseUser extends User {
  //with User model this particular extra data will come as response
  totalPictures: number;
}


export interface IResponseApk extends MyFetchInterface {
  res: {
    apkAllData: Array<ApkData>
    apkAllDataLength: number
  }
}
export interface IResponseSingleApk extends MyFetchInterface {
  res: ApkData
}