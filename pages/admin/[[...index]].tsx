import config from "@/sanity.config";
import Head from "next/head";
import { NextStudioHead } from "next-sanity/studio/head";
import { NextStudio } from "next-sanity/studio";

const StudioPage = () => {
  return (
    <>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={config} />
    </>
  );
};

export default StudioPage;
