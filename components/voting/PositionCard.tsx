import Image from "next/image";
import React from "react";
import { IPosition } from "../../datatypes";
import ProfileCard from "./ProfileCard";

type Props = {
  position: IPosition;
};

const PositionCard: React.FC<Props> = ({ position }) => {
  const [showCandidates, setShowCandidates] = React.useState(false);
  const [chosenCandidate, setChosenCandidate] = React.useState("");

  const changeChosenCandidate = (value: string) => {
    setChosenCandidate(value);
  };

  return (
    <div className="my-10">
      <div className="flex items-center gap-2">
        <label className="block text-sm mb-1 capitalize" htmlFor="moderator">
          {position?.title}:
        </label>
        <select
          className="form-input rounded-none"
          name={position.title?.toLowerCase().replace(" ", "")}
          placeholder="Select a candidate"
          disabled
          required
          // value={chosenCandidate}
          // defaultValue={position?.title!}
        >
          <option value={chosenCandidate}>
            {
              position?.candidates?.find(
                (candidate) => candidate?._id === chosenCandidate
              )?.name
            }
          </option>
        </select>
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
            alt="chevron"
          />
        </button>
      </div>
      <ul className={`${!showCandidates ? "hidden" : "block"}`}>
        {position?.candidates?.length &&
          position.candidates.map((candidate) => (
            <li key={candidate?._id?.toString()}>
              <ProfileCard
                candidate={candidate}
                changeChosenCandidate={changeChosenCandidate}
                position={position?.title?.replace(" ", "").toLowerCase()!}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PositionCard;
