import { IPosition } from "datatypes";
import { GetStaticProps, NextPage } from "next";
// import { sanityClient } from "lib/sanity/sanity.server";
import React from "react";
import { getPositionsWithCandidates } from "utils/getPositionsWithCandidates";
import PositionCard from "../../components/voting/PositionCard";

type Props = {
  positions: IPosition[];
};

const VotePage: NextPage<Props> = ({ positions }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("submitted");
  };

  return (
    <form className="w-[80%] mx-auto my-20" onSubmit={handleFormSubmit}>
      {positions.map((position: any) => (
        <PositionCard position={position} key={position._id.toString()} />
      ))}
      <button type="submit" className="btn btn-primary w-full mt-10 py-2">
        Submit Vote
      </button>
    </form>
  );
};

export default VotePage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const positions = await getPositionsWithCandidates();

  return {
    props: {
      positions,
    },
    revalidate: 10,
  };
};
