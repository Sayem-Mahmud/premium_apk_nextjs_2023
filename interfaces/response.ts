
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
    apkAllDataLength: number,
    // apkAll: Array<ApkData>
    // catSub:Array<any>
  }
}
export interface IResponseSiteMapApk extends MyFetchInterface {
  res: {
    apkAll: Array<ApkData>
  }
}
export interface IResponseSingleApk extends MyFetchInterface {
  res: {
    apkOne: ApkData,
    // catSub: Array<any>
  }
}
export interface IResponseApkSearch extends MyFetchInterface {
  res: {
    apkAllDataSearch: Array<ApkData>
    apkAllDataLengthSearch: number,
    // catSub:Array<any>

  }
}

export interface IResponseApkCategorized extends MyFetchInterface {
  res: {
    categorizedApk: Array<ApkData>
    apkAllDataLengthCategorized: number
    // catSub:Array<any>
  }
}