import { createClient } from "next-sanity";
import getConfig from "next/config";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

export default createClient({
  projectId: publicRuntimeConfig.SANITY_PROJECT_ID!,
  dataset: publicRuntimeConfig.SANITY_DATASET!,
  token: serverRuntimeConfig.SANITY_TOKEN!,
  apiVersion: "2023-03-17",
});
