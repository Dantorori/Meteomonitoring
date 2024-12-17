import { SexType } from "@faker-js/faker";

export interface person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: Date;
  sex: SexType;
  email: string;
}
