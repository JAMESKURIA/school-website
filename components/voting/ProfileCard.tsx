import React from "react";

const ProfileCard: React.FC<{
  changeChosenCandidate: ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => void;
}> = ({ changeChosenCandidate }) => {
  // const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState();

  const handleCandidateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    changeChosenCandidate({ name, value });
  };

  return (
    <div className="flex w-full justify-between items-center border-gray-200 border-b">
      <div
        className="avatar-text flex-1 p-3"
        // onClick={() => {
        //   setChecked((prev) => !prev);
        //   console.log("Checked", checked);
        // }}
      >
        <div className="avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <p>Praveen Juge</p>
      </div>
      <input
        type="radio"
        className="form-radio border-gray-500"
        name="radio"
        value="1"
        // checked={checked}
        onChange={(e) => handleCandidateChange(e)}
      />
    </div>
  );
};

export default ProfileCard;
