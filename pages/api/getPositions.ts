// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sanityClient from "config/sanity";
import { IPosition } from "datatypes";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  positions: IPosition[];
};

const positionsQuery = `*[_type == "position"]{
    _id,
    title,
    description,
    slug,
    "candidates": *[_type == "candidate" && references(^._id)]
  }`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const positions: IPosition[] = await sanityClient.fetch(positionsQuery);

  res.status(200).json({ positions });
}
