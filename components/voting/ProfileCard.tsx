import Image from "next/image";
import React from "react";
import { ICandidate } from "../../datatypes";

interface IProps {
  candidate: ICandidate;
  changeChosenCandidate: ({
    name,
    value,
  }: {
    name?: string;
    value: string;
  }) => void;
}

const ProfileCard: React.FC<IProps> = ({
  changeChosenCandidate,
  candidate,
}) => {
  const handleCandidateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    changeChosenCandidate({ value });
  };

  return (
    <div className="flex w-full justify-between items-center border-gray-200 border-b">
      <div className="avatar-text flex-1 p-3">
        <div className="avatar">
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
        name="radio"
        value={JSON.stringify({ name: candidate.name, id: candidate.id })}
        onChange={(e) => handleCandidateChange(e)}
      />
    </div>
  );
};

export default ProfileCard;
