import Image from "next/image";
import React from "react";
import ProfileCard from "./ProfileCard";

const PositionCard = () => {
  const [showCandidates, setShowCandidates] = React.useState(false);
  const [chosenCandidate, setChosenCandidate] = React.useState<{
    name: string;
    value: string;
  }>({ name: "", value: "" });

  const changeChosenCandidate = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    // console.log({ name, value });
    setChosenCandidate({ name, value });
  };

  return (
    <div className="my-10">
      <div className="flex items-center gap-2">
        <label className="block text-sm mb-1" htmlFor="moderator">
          Moderator:
        </label>
        <input
          className="form-input rounded-none"
          type="email"
          placeholder="moderator"
          id="moderator"
          required
          disabled
          value={chosenCandidate.name}
        />
        <button
          type="button"
          className="btn btn-light-secondary rounded-none flex items-center gap-2 px-6"
          onClick={() => setShowCandidates((prev) => !prev)}
        >
          <span>Select</span>
          <Image
            src={`${
              showCandidates
                ? "/up-chevron-svgrepo-com.svg"
                : "/down-chevron-svgrepo-com.svg"
            }`}
            height={10}
            width={10}
            alt="chevrondown"
          />
        </button>
      </div>
      <ul className={`${!showCandidates ? "hidden" : "block"}`}>
        <li>
          <ProfileCard changeChosenCandidate={changeChosenCandidate} />
        </li>
        <li>
          <ProfileCard changeChosenCandidate={changeChosenCandidate} />
        </li>
      </ul>
    </div>
  );
};

export default PositionCard;
