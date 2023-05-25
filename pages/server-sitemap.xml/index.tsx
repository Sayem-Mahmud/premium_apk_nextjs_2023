import { getServerSideSitemapLegacy } from "next-sitemap";
import { PremiumApkApi } from "../../src/API/PremiumApkApi";

export const getServerSideProps = async (ctx:any) => {
  let posts = await fetch("http://localhost:8000/apks/findAllApk?page=1");
  const {res,err}= await PremiumApkApi.getAllApk(1)
  // posts = await posts.json();
  console.log('res', res.apkAll);
  //@ts-ignore
  const newsSitemaps = res.apkAll.map((item:any) => ({
    loc: `http://localhost:3000/sourceCode/${item._id}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}





// import { GetServerSideProps } from "next";
// import { getServerSideSitemap, ISitemapField } from "next-sitemap";
// import { callFetch } from "../../src/utils/CallFetch";
// import { PremiumApkApi } from "../../src/API/PremiumApkApi";

// export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { res, err } = await PremiumApkApi.getAllApk(1);

//   if (Array.isArray(res?.apkAll)) {
//     const fields: ISitemapField[] = res?.apkAll.map((capsule) => ({
//       loc: `http://localhost:3000/sourceCode/${capsule._id}`,
//       lastmod: new Date().toISOString(),
//     }));
//     console.log('fields', fields);

//     if (Array.isArray(fields)) {
//       return {
//         props: {
//           ...(await getServerSideSitemap(fields)), // Pass the 'fields' array directly
//         },
//       };
//     }
//   }

//   return {
//     props: {},
//   };
// };


// export default function Site() {}