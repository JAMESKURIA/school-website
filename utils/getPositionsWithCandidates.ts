import { IPosition } from "datatypes";

export const getPositionsWithCandidates = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPositions`
  );

  const { positions }: { positions: IPosition[] } = await res.json();

  return positions;
};
