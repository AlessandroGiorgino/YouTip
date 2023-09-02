export interface CurrentRoundResponse {
  errors: any[];
  get: string;
  paging: Paging;
  parameters: Parameters;
  response: ResponseCurrent[];
  results: number;
}

export interface Paging {
  current: number;
  total: number;
}
export interface Parameters {
  league: string;
  from: string;
  to: string;
  season: string;
}
export interface ResponseCurrent {
  round: string;
}
