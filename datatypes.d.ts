export interface ICandidate {
  id: number;
  name: string;
  image: string;
}

export interface IPosition {
  id: number;
  name: string;
  candidates: ICandidate[];
}
