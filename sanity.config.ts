import getConfig from "next/config";
import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "@/schemas";

const { publicRuntimeConfig } = getConfig();

export default defineConfig({
  basePath: "/admin",
  title: "Questo",
  projectId: publicRuntimeConfig.SANITY_PROJECT_ID!,
  dataset: publicRuntimeConfig.SANITY_DATASET!,
  plugins: [deskTool(), ...(isDev ? [visionTool()] : [])],
  schema: {
    types: schemaTypes,
  },
});
