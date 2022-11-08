import Image from "next/image";
import React from "react";
import { IPosition } from "../../datatypes";
import ProfileCard from "./ProfileCard";

type Props = {
  position: IPosition;
};

const PositionCard: React.FC<Props> = ({ position }) => {
  const [showCandidates, setShowCandidates] = React.useState(false);
  const [chosenCandidate, setChosenCandidate] = React.useState<{
    name: string;
    id: string;
  }>({ name: "", id: "" });

  const changeChosenCandidate = ({
    name,
    value,
  }: {
    name?: string;
    value: string;
  }) => {
    const { id: candidateId, name: candidateName } = JSON.parse(value);

    setChosenCandidate({ id: candidateId, name: candidateName });
  };

  return (
    <div className="my-10">
      <div className="flex items-center gap-2">
        <label className="block text-sm mb-1 capitalize" htmlFor="moderator">
          {position.name}:
        </label>
        <input
          className="form-input rounded-none"
          type="email"
          placeholder="moderator"
          id={position.name.toLowerCase().replace(" ", "")}
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
        {position.candidates.length &&
          position.candidates.map((candidate) => (
            <li key={candidate.id.toString()}>
              <ProfileCard
                candidate={candidate}
                changeChosenCandidate={changeChosenCandidate}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PositionCard;
