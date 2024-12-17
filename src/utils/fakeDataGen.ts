import { faker } from "@faker-js/faker";
import { person } from "../types/types";

export function createFakePerson(countItems: number): person[] {
  const dataObject: person[] = [];
  for (let i = 0; i < countItems; i++) {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });
    dataObject.push({
      id: i + 1,
      firstName: firstName,
      lastName: lastName,
      age: faker.number.int({ min: 1, max: 100 }),
      dateOfBirth: faker.date.birthdate({ mode: "age", min: 1, max: 100 }),
      sex: sex,
      email: email,
    });
  }
  return dataObject;
}
