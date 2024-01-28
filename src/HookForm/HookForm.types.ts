export enum Gender {
  Male = "male",
  Female = "female",
  NonBinary = "nonBinary",
  // Other = "other",
}

export type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  gender: `${Gender}`;
};
