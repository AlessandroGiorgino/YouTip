import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FixturesSerieA } from './interfaces/fixtures-serie-a';
@Injectable({
  providedIn: 'root',
})
export class FetchesService {
  //footpred
  pssApiFootPred: string = environment.API_KEY_FOOT_PRED;

  //apifoot
  pssApiFootNew: string = environment.API_KEY_AP_FOOT;
  urlApiFootballFixtures: string =
    'https://api-football-v1.p.rapidapi.com/v3/fixtures';
  //firebase
  pssApiFirebase: string = environment.API_KEY_FIREBASE;

  constructor(private http: HttpClient) {}
  //metodo get su api foot nuova per serie a
  optionsFixtureSerieA = {
    params: {
      league: '135',
      season: '2023',
      from: '2023-09-01',
      to: '2023-09-03',
    },
    headers: {
      'X-RapidAPI-Key': this.pssApiFootNew,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };
  getFixturesSerieA() {
    return this.http.get<FixturesSerieA>(
      this.urlApiFootballFixtures,
      this.optionsFixtureSerieA
    );
  }
}
