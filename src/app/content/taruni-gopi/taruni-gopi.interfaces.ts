export interface IDevotee {
  spiritualName: string;
  socialName: string;
  adress: {
      city: string;
      state: string;
      country: string;
  },
  contact: {
      phone: number;
      email: string;
  },
  dateOfBirth: number;
  dateOfInitiation: number;
}