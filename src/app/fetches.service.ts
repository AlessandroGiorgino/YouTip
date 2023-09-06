import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentD } from 'src/environments/environment.development';
import { Fixtures } from './interfaces/fixtures';
import { Predictions, PredictionsById } from './interfaces/predictions-by-id';
import { CurrentRoundResponse } from './interfaces/currentRoundResponse';
@Injectable({
  providedIn: 'root',
})
export class FetchesService {
  //footpred
  pssApiFootPred: string = environmentD.API_KEY_FOOT_PRED;

  //apifoot
  pssApiFootNew: string = environmentD.API_KEY_AP_FOOT;
  //firebase
  pssApiFirebase: string = environmentD.API_KEY_FIREBASE;

  //url per fixtures
  urlApiFootballFixtures: string =
    'https://api-football-v1.p.rapidapi.com/v3/fixtures/';

  //url per current round
  urlCurrentRound: string = this.urlApiFootballFixtures + 'rounds';
  //variabile per il current round
  currentRoundRes: string = '';

  //qui predictions for id
  urlPredictionsById: string =
    'https://api-football-v1.p.rapidapi.com/v3/predictions';
  idForSingleMatch!: any;

  constructor(private http: HttpClient) {}

  //metodo per get current round
  //options

  //SERIE A
  getCurrentRoundSerieA() {
    let optionsCurrentRoundSerieA = {
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

    return this.http.get<CurrentRoundResponse>(
      this.urlCurrentRound,
      optionsCurrentRoundSerieA
    );
  }
  //get per le fixtures serie a
  getFixturesSerieA() {
    const optionsFixtureSerieA = {
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
    return this.http.get<Fixtures>(
      this.urlApiFootballFixtures,
      optionsFixtureSerieA
    );
  }
  //SERIE B

  getCurrentRoundSerieB() {
    let optionsCurrentRoundSerieB = {
      params: {
        league: '136',
        season: '2023',
        current: 'true',
      },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    return this.http.get<CurrentRoundResponse>(
      this.urlCurrentRound,
      optionsCurrentRoundSerieB
    );
  }

  //get per le fixtures serie b
  getFixturesSerieB() {
    let optionsFixtureSerieB = {
      params: {
        league: '136',
        season: '2023',
        round: this.currentRoundRes,
      },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };
    return this.http.get<Fixtures>(
      this.urlApiFootballFixtures,
      optionsFixtureSerieB
    );
  }

  getCurrentRoundPremierLeague() {
    let optionsCurrentRoundPremierLeague = {
      params: {
        league: '39',
        season: '2023',
        current: 'true',
      },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    return this.http.get<CurrentRoundResponse>(
      this.urlCurrentRound,
      optionsCurrentRoundPremierLeague
    );
  }

  getFixturesPremierLeague() {
    let optionsFixturePremierLeague = {
      params: {
        league: '39',
        season: '2023',
        round: this.currentRoundRes,
      },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };
    return this.http.get<Fixtures>(
      this.urlApiFootballFixtures,
      optionsFixturePremierLeague
    );
  }
  //championship
  getCurrentRoundChampionship() {
    let optionsCurrentRoundChampionship = {
      params: {
        league: '40',
        season: '2023',
        current: 'true',
      },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };

    return this.http.get<CurrentRoundResponse>(
      this.urlCurrentRound,
      optionsCurrentRoundChampionship
    );
  }

  getFixturesChampionship() {
    let optionsFixtureChampionship = {
      params: {
        league: '40',
        season: '2023',
        round: this.currentRoundRes,
      },
      headers: {
        'X-RapidAPI-Key': this.pssApiFootNew,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
    };
    return this.http.get<Fixtures>(
      this.urlApiFootballFixtures,
      optionsFixtureChampionship
    );
  }

  //get per partita singola tramite id
  getPredictionByMatchId() {
    //options per partita singola tramite id
    let optionsMatchById = {
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
