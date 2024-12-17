interface meteoReportObject {
  pole_id: number;
  line_name: string;
  created_at: string;
  max_propability: number;
}

export default interface meteoreport {
  data: meteoReportObject[];
}
