import { getServerSideSitemapLegacy } from "next-sitemap";
import { PremiumApkApi } from "../../src/API/PremiumApkApi";
import { Jsondata } from "../../src/utils/Jsondata";

export const getServerSideProps = async (ctx:any) => {
  const {res,err}= await PremiumApkApi.getAllApkSiteMap()
  // posts = await posts.json();
  console.log('res', res.apkAll);
  //@ts-ignore
  const newsSitemaps = res.apkAll.map((item:any) => ({
    loc: `https://premium-apk-nextjs-2023.vercel.app/sourceCode/${item._id}`,
    lastmod: new Date().toISOString(),
  }));

  const newsSitemap9 = Jsondata.promotions.map((item:any) => ({
    loc: item.link,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps,...newsSitemap9];

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