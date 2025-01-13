export interface PoleData {
  pole_id: number;
  line_name: string;
  created_at: string;
  max_probability: number;
}

export interface ServerResponse {
  data: PoleData[];
}
