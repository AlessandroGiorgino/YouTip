export interface PredictionsById {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  fixture: string;
}

export interface Response {
  predictions: Predictions;
  league: ResponseLeague;
  teams: Teams;
  comparison: Comparison;
  h2h: any[];
}

export interface Comparison {
  form: Att;
  att: Att;
  def: Att;
  poisson_distribution: Att;
  h2h: Att;
  goals: Att;
  total: Att;
}

export interface Att {
  home: null | string;
  away: null | string;
}

export interface ResponseLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface Predictions {
  winner: Winner;
  win_or_draw: boolean;
  under_over: string;
  goals: Att;
  advice: string;
  percent: Percent;
}

export interface Percent {
  home: string;
  draw: string;
  away: string;
}

export interface Winner {
  id: number;
  name: string;
  comment: null;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
  last_5: Last5;
  league: AwayLeague;
}

export interface Last5 {
  form: string;
  att: string;
  def: string;
  goals: Last5_Goals;
}

export interface Last5_Goals {
  for: PurpleAgainst;
  against: PurpleAgainst;
}

export interface PurpleAgainst {
  total: number;
  average: string;
}

export interface AwayLeague {
  form: string;
  fixtures: Fixtures;
  goals: LeagueGoals;
  biggest: PurpleBiggest;
  clean_sheet: CleanSheet;
  failed_to_score: CleanSheet;
  penalty: Penalty;
  lineups: Lineup[];
  cards: Cards;
}

export interface PurpleBiggest {
  streak: Streak;
  wins: Att;
  loses: Loses;
  goals: BiggestGoals;
}

export interface BiggestGoals {
  for: Loses;
  against: Loses;
}

export interface Loses {
  home: number | null;
  away: number | null;
}

export interface Streak {
  wins: number;
  draws: number;
  loses: number;
}

export interface Cards {
  yellow: { [key: string]: Missed };
  red: { [key: string]: Missed };
}

export interface Missed {
  total: number | null;
  percentage: null | string;
}

export interface CleanSheet {
  home: number;
  away: number;
  total: number;
}

export interface Fixtures {
  played: CleanSheet;
  wins: CleanSheet;
  draws: CleanSheet;
  loses: CleanSheet;
}

export interface LeagueGoals {
  for: FluffyAgainst;
  against: FluffyAgainst;
}

export interface FluffyAgainst {
  total: CleanSheet;
  average: Average;
  minute: { [key: string]: Missed };
}

export interface Average {
  home: string;
  away: string;
  total: string;
}

export interface Lineup {
  formation: string;
  played: number;
}

export interface Penalty {
  scored: Missed;
  missed: Missed;
  total: number;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  last_5: Last5;
  league: HomeLeague;
}

export interface HomeLeague {
  form: null;
  fixtures: Fixtures;
  goals: LeagueGoals;
  biggest: FluffyBiggest;
  clean_sheet: CleanSheet;
  failed_to_score: CleanSheet;
  penalty: Penalty;
  lineups: any[];
  cards: Cards;
}

export interface FluffyBiggest {
  streak: Streak;
  wins: Loses;
  loses: Loses;
  goals: BiggestGoals;
}
