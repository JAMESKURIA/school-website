// export interface ICandidate {
//   id: number;
//   name: string;
//   image: string;
// }

// export interface IPosition {
//   id: number;
//   name: string;
//   candidates: ICandidate[];
// }

export interface IPosition {
  _id?: string;
  candidates?: Candidate[];
  description?: null | string;
  slug?: null;
  title?: null | string;
}

export interface Candidate {
  _createdAt?: Date;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: Date;
  email?: string;
  name?: string;
  phone?: string;
  photo?: Photo;
  position?: Position;
  slug?: Slug;
}

export interface Photo {
  _type?: string;
  asset?: Position;
}

export interface Position {
  _ref?: string;
  _type?: string;
}

export interface Slug {
  _type?: string;
  current?: string;
}
