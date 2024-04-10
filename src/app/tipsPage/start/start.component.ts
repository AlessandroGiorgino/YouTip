import { async } from '@angular/core/testing';
import { Response, Fixtures } from '../../interfaces/fixtures';
import { Component, ViewEncapsulation } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { MatchListComponent } from 'src/app/modals/match-list/match-list.component';
import { CurrentRoundResponse } from 'src/app/interfaces/currentRoundResponse';
import { LoginPageComponent } from 'src/app/home/login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class StartComponent {
  //qui
  currentRound!: string;
  fixturesChampionsLeague: Response[] = [];
  fixturesEuropaLeague: Response[] = [];
  fixturesSerieA: Response[] = [];
  fixturesSerieB: Response[] = [];
  fixturesPremierLeague: Response[] = [];
  fixturesChampionship: Response[] = [];
  fixturesLiga: Response[] = [];
  fixturesSegundaDivision: Response[] = [];
  fixturesBundesliga: Response[] = [];
  fixturesFusballBundesliga: Response[] = [];
  //legenda per me, indice 0 serie a, indice 1 serieb
  logosListSerieA: any = {
    logoSerieA: 'https://media.api-sports.io/football/leagues/135.png',
    atalanta: '../../../assets/logos/serieA/atalanta.png',
    bologna: '../../../assets/logos/serieA/bologna.png',
    cagliari: '../../../assets/logos/serieA/cagliari.png',
    empoli: '../../../assets/logos/serieA/empoli.png',
    fiorentina: '../../../assets/logos/serieA/fiorentina.png',
    frosinone: '../../../assets/logos/serieA/frosinone.png',
    genoa: '../../../assets/logos/serieA/genoa.png',
    inter: '../../../assets/logos/serieA/inter.png',
    juventus: '../../../assets/logos/serieA/juventus.png',
    lazio: '../../../assets/logos/serieA/lazio.png',
    lecce: '../../../assets/logos/serieA/lecce.png',
    milan: '../../../assets/logos/serieA/milan.png',
    monza: '../../../assets/logos/serieA/monza.png',
    napoli: '../../../assets/logos/serieA/napoli.png',
    roma: '../../../assets/logos/serieA/roma.png',
    salernitana: '../../../assets/logos/serieA/salernitana.png',
    sassuolo: '../../../assets/logos/serieA/sassuolo.png',
    torino: '../../../assets/logos/serieA/torino.png',
    udinese: '../../../assets/logos/serieA/udinese.png',
    verona: '../../../assets/logos/serieA/verona.png',
  };
  logosListSerieB: any = {
    logoSerieB: 'https://media.api-sports.io/football/leagues/136.png',
    ascoli: '../../../assets/logos/serieB/ascoli.png',
    bari: '../../../assets/logos/serieB/bari.png',
    brescia: '../../../assets/logos/serieB/brescia.png',
    catanzaro: '../../../assets/logos/serieB/catanzaro.png',
    cittadella: '../../../assets/logos/serieB/cittadella.png',
    como: '../../../assets/logos/serieB/como.png',
    cosenza: '../../../assets/logos/serieB/cosenza.png',
    cremonese: '../../../assets/logos/serieB/cremonese.png',
    feralpisalo: '../../../assets/logos/serieB/feralpisalo.png',
    lecco: '../../../assets/logos/serieB/lecco.png',
    modena: '../../../assets/logos/serieB/modena.png',
    palermo: '../../../assets/logos/serieB/palermo.png',
    parma: '../../../assets/logos/serieB/parma.png',
    pisa: '../../../assets/logos/serieB/pisa.png',
    reggiana: '../../../assets/logos/serieB/reggiana.png',
    sampdoria: '../../../assets/logos/serieB/sampdoria.png',
    spezia: '../../../assets/logos/serieB/spezia.png',
    sudtirol: '../../../assets/logos/serieB/sudtirol.png',
    ternana: '../../../assets/logos/serieB/ternana.png',
    venezia: '../../../assets/logos/serieB/venezia.png',
  };
  logosListPremierLeague: any = {
    logoPremierLeague: 'https://media.api-sports.io/football/leagues/39.png',
    arsenal: '../../../assets/logos/premierLeague/arsenal.png',
    aston_villa: '../../../assets/logos/premierLeague/aston villa.png',
    bournemouth: '../../../assets/logos/premierLeague/bournemouth.png',
    brighton: '../../../assets/logos/premierLeague/brighton.png',
    brentford: '../../../assets/logos/premierLeague/brentford.png',
    burnley: '../../../assets/logos/premierLeague/burnley.png',
    chelsea: '../../../assets/logos/premierLeague/chelsea.png',
    crystal_palace: '../../../assets/logos/premierLeague/crystal palace.png',
    everton: '../../../assets/logos/premierLeague/everton.png',
    fulham: '../../../assets/logos/premierLeague/fulham.png',
    liverpool: '../../../assets/logos/premierLeague/liverpool.png',
    luton: '../../../assets/logos/premierLeague/luton.png',
    manchester_city: '../../../assets/logos/premierLeague/manchester city.png',
    manchester_united:
      '../../../assets/logos/premierLeague/manchester united.png',
    newcastle: '../../../assets/logos/premierLeague/newcastle.png',
    nottingham_forest:
      '../../../assets/logos/premierLeague/nottingham forest.png',
    sheffield: '../../../assets/logos/premierLeague/sheffield.png',
    tottenham: '../../../assets/logos/premierLeague/tottenham.png',
    west_ham: '../../../assets/logos/premierLeague/west ham united.png',
    wolves: '../../../assets/logos/premierLeague/wolverhampton.png',
  };

  constructor(
    private srv: FetchesService,
    private route: Router,
    private auth: AuthenticationService
  ) {}

  getTeamLogoUrl(teamName: string): string | undefined {
    if (teamName === 'AC Milan') {
      return this.logosListSerieA['milan'];
    } else if (teamName === 'AS Roma') {
      return this.logosListSerieA['roma'];
    } else {
      const lowercaseTeamName = teamName.toLowerCase();
      return this.logosListSerieA[lowercaseTeamName];
    }
  }
  getTeamLogoUrlPremierLeague(teamName: string): string | undefined {
    if (teamName === 'Aston Villa') {
      return this.logosListPremierLeague['aston_villa'];
    } else if (teamName === 'Crystal Palace') {
      return this.logosListPremierLeague['crystal_palace'];
    } else if (teamName === 'Manchester City') {
      return this.logosListPremierLeague['manchester_city'];
    } else if (teamName === 'Manchester United') {
      return this.logosListPremierLeague['manchester_united'];
    } else if (teamName === 'Nottingham Forest') {
      return this.logosListPremierLeague['nottingham_forest'];
    } else if (teamName === 'Sheffield Utd') {
      return this.logosListPremierLeague['sheffield'];
    } else if (teamName === 'West Ham') {
      return this.logosListPremierLeague['west_ham'];
    } else {
      const lowercaseTeamName = teamName.toLowerCase();
      return this.logosListPremierLeague[lowercaseTeamName];
    }
  }
  getTeamLogoUrlSerieB(teamName: string): string | undefined {
    const lowercaseTeamName = teamName.toLowerCase();
    return this.logosListSerieB[lowercaseTeamName];
  }
  //check se è loggato e autologut

  getCurrentRoundSerieA(): void {
    this.srv.getCurrentRoundSerieA().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      //qui la get serieA
      this.srv.getFixturesSerieA().subscribe((res) => {
        this.fixturesSerieA = res.response;
      });
    });
  }
  getCurrentRoundSerieB(): void {
    //serie a
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSerieB().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesSerieB().subscribe((res) => {
        this.fixturesSerieB = res.response;
      });
    });
  }
  getCurrentRoundPremierLeague(): void {
    this.srv.getCurrentRoundPremierLeague().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesPremierLeague().subscribe((res) => {
        this.fixturesPremierLeague = res.response;
      });
    });
  }
  getCurrentRoundChampionship(): void {
    this.srv.getCurrentRoundChampionship().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesChampionship().subscribe((res) => {
        this.fixturesChampionship = res.response;
      });
    });
  }
  getCurrentRoundLiga(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundLiga().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesLiga().subscribe((res) => {
        this.fixturesLiga = res.response;
      });
    });
  }
  getCurrentRoundSegundaDivision(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSegundaDivision().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesSegundaDivision().subscribe((res) => {
        this.fixturesSegundaDivision = res.response;
      });
    });
  }
  getCurrentRoundBundesliga(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundBundesliga().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesBundesliga().subscribe((res) => {
        this.fixturesBundesliga = res.response;
      });
    });
  }
  getCurrentRoundFusballBundesliga(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundFusballBundesliga().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      this.srv.getFixturesFusballBundesliga().subscribe((res) => {
        this.fixturesFusballBundesliga = res.response;
      });
    });
  }

  ngOnInit() {
    if (
      localStorage.getItem('user') === null &&
      this.auth.emailConfirmed === false
    ) {
      this.route.navigate(['login']);
    } else {
      return;
    }
  }
  ngAfterContentInit() {
    this.getCurrentRoundSerieA();
    this.getCurrentRoundSerieB();
    this.getCurrentRoundPremierLeague();
    this.getCurrentRoundChampionship();
    this.getCurrentRoundLiga();
    this.getCurrentRoundSegundaDivision();
    this.getCurrentRoundBundesliga();
    this.getCurrentRoundFusballBundesliga();
  }

  //unico per tutti
  modalMatches: boolean = false;
  // seriaA modal
  visibleChampionsLeague: boolean = false;

  showDialogChampionsLeague() {
    this.visibleChampionsLeague = true;
  }
  visibleEuropaLeague: boolean = false;

  showDialogEuropaLeague() {
    this.visibleEuropaLeague = true;
  }
  visibleSerieA: boolean = false;

  showDialogSerieA() {
    this.visibleSerieA = true;
  }

  // serie b modal
  visibleSerieB: boolean = false;

  showDialogSerieB() {
    this.visibleSerieB = true;
  }

  // Premier League modal
  visiblePremierLeague: boolean = false;

  showDialogPremierLeague() {
    this.visiblePremierLeague = true;
  }
  // Championship modal
  visibleChampionship: boolean = false;

  showDialogChampionship() {
    this.visibleChampionship = true;
  }

  //La liga modal
  visibleLiga: boolean = false;

  showDialogLiga() {
    this.visibleLiga = true;
  }
  //segunda division modal
  visibleSegundaDivision: boolean = false;

  showDialogSegundaDivision() {
    this.visibleSegundaDivision = true;
  }
  //Bundesliga modal
  visibleBundesliga: boolean = false;

  showDialogBundesliga() {
    this.visibleBundesliga = true;
  }
  //FusballBundesliga division modal
  visibleFusballBundesliga: boolean = false;

  showDialogFusballBundseliga() {
    this.visibleFusballBundesliga = true;
  }
}
