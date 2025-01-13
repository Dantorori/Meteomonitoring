import { PoleData, ServerResponse } from "../types/meteoResponse";

export async function fetchPrediction(pole_id: number): Promise<PoleData[]> {
  const response = await fetch(
    `http://meteomonitoring.ru:8080/pole_prediction?company_id=${pole_id}`,
  );
  const data: ServerResponse = await response.json();
  return data.data;
}
