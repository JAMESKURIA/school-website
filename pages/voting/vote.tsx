import React from "react";
import PositionCard from "../../components/voting/PositionCard";
import { positions } from "../../data";

const VotePage = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form className="w-[80%] mx-auto my-20" onSubmit={handleFormSubmit}>
      {positions.map((position) => (
        <PositionCard position={position} key={position.id.toString()} />
      ))}
      <button type="submit" className="btn btn-primary w-full mt-10 py-2">
        Submit Vote
      </button>
    </form>
  );
};

export default VotePage;
