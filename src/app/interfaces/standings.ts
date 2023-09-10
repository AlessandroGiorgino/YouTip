export interface Standings {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: ResponseStandings[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
}

export interface ResponseStandings {
  league: League;
}

export interface League {
  id: number;
  name: Name;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Array<Standing[]>;
}

export enum Name {
  Championship = 'Championship',
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: Name;
  form: string;
  status: Status;
  description: null;
  all: All;
  home: All;
  away: All;
  update: Date;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}

export enum Status {
  Same = 'same',
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
