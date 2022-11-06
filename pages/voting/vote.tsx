import React from "react";
import PositionCard from "../../components/voting/PositionCard";

const VotePage = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form className="w-[80%] mx-auto my-20" onSubmit={handleFormSubmit}>
      <PositionCard />
      <PositionCard />
      <button type="submit" className="btn btn-primary w-full mt-10 py-2">
        Submit Vote
      </button>
    </form>
  );
};

export default VotePage;
