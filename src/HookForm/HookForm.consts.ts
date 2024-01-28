import { Gender } from "./HookForm.types";

export const GENDER_OPTIONS: { value: `${Gender}`; label: string }[] = [
  { value: Gender.Male, label: "Male" },
  { value: Gender.Female, label: "Female" },
  { value: Gender.NonBinary, label: "Non-binary" },
  // { value: Gender.Other, label: "Rather not say" },
];
