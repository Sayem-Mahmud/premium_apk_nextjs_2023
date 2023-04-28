//here we will declare our data models interfaces or in easy way type of our all datas in our website

export type User = {
  id: number;
  name: string;
};

export type ApkData = {
  _id: string;
  title: string;
  imgSrc: string;
  createdAt: string;
  categories: string;
  version: string;
  fileSize: string;
  developer: string;
  allText: Array<string>;
  imgSrcAll: Array<string>;
  requiredAndroid: string;
  downloadFile: Array<{href:string,innerText:string}>;
}
