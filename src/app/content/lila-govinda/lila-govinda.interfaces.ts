export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: number;
  gender: IGender;
}

export interface IGender {
  male: boolean;
  female: boolean;
  other: boolean;
  otherDescription: string;
}