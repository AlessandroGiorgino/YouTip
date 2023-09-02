import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fixtures } from './interfaces/fixtures';
import { Predictions, PredictionsById } from './interfaces/predictions-by-id';
import { CurrentRoundResponse } from './interfaces/currentRoundResponse';
@Injectable({
  providedIn: 'root',
})
export class FetchesService {
  //footpred
  pssApiFootPred: string = environment.API_KEY_FOOT_PRED;

  //apifoot
  pssApiFootNew: string = environment.API_KEY_AP_FOOT;
  //firebase
  pssApiFirebase: string = environment.API_KEY_FIREBASE;

  //url per fixtures
  urlApiFootballFixtures: string =
    'https://api-football-v1.p.rapidapi.com/v3/fixtures/';

  //url per current round
  urlCurrentRoundSerieA: string = this.urlApiFootballFixtures + 'rounds';
  //variabile per il current round
  currentRoundRes!: string;

  //qui predictions for id
  urlPredictionsById: string =
    'https://api-football-v1.p.rapidapi.com/v3/predictions';
  idForSingleMatch!: any;

  constructor(private http: HttpClient) {}

  //metodo per get current round
  //options
  optionsCurrentRoundSerieA = {
    params: {
      league: '135',
      season: '2023',
      current: 'true',
    },
    headers: {
      'X-RapidAPI-Key': this.pssApiFootNew,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };
  //getCurrentRound
  getCurrentRoundSerieA() {
    return this.http.get<CurrentRoundResponse>(
      this.urlCurrentRoundSerieA,
      this.optionsCurrentRoundSerieA
    );
  }

  //metodo get su api foot nuova per serie a
  optionsFixtureSerieA = {
    params: {
      league: '135',
      season: '2023',
      round: this.currentRoundRes,
    },
    headers: {
      'X-RapidAPI-Key': this.pssApiFootNew,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };
  optionsFixtureSerieB = {
    params: {
      league: '136',
      season: '2023',
      from: '2023-09-01',
      to: '2023-09-03',
    },
    headers: {
      'X-RapidAPI-Key': this.pssApiFootNew,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };
  //get per le fixtures serie a
  getFixturesSerieA() {
    return this.http.get<Fixtures>(
      this.urlApiFootballFixtures,
      this.optionsFixtureSerieA
    );
  }
  //get per le fixtures serie b
  getFixturesSerieB() {
    return this.http.get<Fixtures>(
      this.urlApiFootballFixtures,
      this.optionsFixtureSerieB
    );
  }

  //get per partita singola tramite id
  getPredictionByMatchId() {
    //options per partita singola tramite id
    const optionsMatchById = {
      params: { fixture: this.idForSingleMatch },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };
    return this.http.get<PredictionsById>(
      this.urlPredictionsById,
      optionsMatchById
    );
  }
}
