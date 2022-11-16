// import client from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // Set useCdn to false if you want to ensure fresh data
  useCdn: true,
  apiVersion: "2022-11-16",
};

const sanityClient = createClient(config);

// @ts-ignore
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export default sanityClient;
