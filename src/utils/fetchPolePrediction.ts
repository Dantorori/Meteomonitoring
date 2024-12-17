import meteoreport from "../types/meteoReport";

export default async function fetchPolePrediction(
  companyID: number,
): Promise<meteoreport | void> {
  try {
    const response = await fetch(
      `http://meteomonitoring.ru:8080/pole_prediction/${companyID}`,
    );
    if (!response.ok) {
      throw new Error(`Response status ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
}
