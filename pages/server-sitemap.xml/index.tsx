import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await fetch(process.env.APIURL + `/nucts`);
    const data: any[] = await response.json();

    const fields: ISitemapField[] = data.map((nucts) => ({
        loc: process.env.APIURL + `/${nucts.Path}`,
        lastmod: new Date().toISOString(),
    }));

    console.log(fields);

    return getServerSideSitemap(ctx, fields);
}

export default function Site() {}