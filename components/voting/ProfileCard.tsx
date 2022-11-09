import Image from "next/image";
import React from "react";
import { ICandidate } from "../../datatypes";

interface IProps {
  position: string;
  candidate: ICandidate;
  changeChosenCandidate: (value: string) => void;
}

const ProfileCard: React.FC<IProps> = ({
  changeChosenCandidate,
  candidate,
  position,
}) => {
  const handleCandidateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeChosenCandidate(e.target.value);
  };

  return (
    <div className="flex w-full justify-between items-center border-gray-200 border-b">
      <div className="avatar-text flex-1 p-3">
        <div className="avatar rounded-none">
          <Image
            src={`/${candidate.image}`}
            layout="fill"
            // className="object-cover object-center"
            objectFit="cover"
            objectPosition="center"
            alt="candidate profile image"
          />
        </div>

        <p>{candidate.name}</p>
      </div>
      <input
        type="radio"
        className="form-radio border-gray-500"
        name={position}
        value={candidate.id}
        onChange={(e) => handleCandidateChange(e)}
      />
    </div>
  );
};

export default ProfileCard;
