import { async } from '@angular/core/testing';
import { Response, Fixtures } from '../../interfaces/fixtures';
import { Component, ViewEncapsulation } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { MatchListComponent } from 'src/app/modals/match-list/match-list.component';
import { CurrentRoundResponse } from 'src/app/interfaces/currentRoundResponse';
import { LoginPageComponent } from 'src/app/home/login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import * as allLogosFile from '../../allLogosList';
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

  constructor(
    private srv: FetchesService,
    private route: Router,
    private auth: AuthenticationService
  ) {}
  logoSerieA: string = allLogosFile.logosListSerieA.logoSerieA;
  logoSerieB: string = allLogosFile.logosListSerieB.logoSerieB;
  logoPremierLeague: string =
    allLogosFile.logosListPremierLeague.logoPremierLeague;
  getTeamLogoUrlSerieA(teamName: string): string | undefined {
    if (teamName === 'AC Milan') {
      // return this.logosListSerieA['milan'];
      return allLogosFile.logosListSerieA.milan;
    } else if (teamName === 'AS Roma') {
      return allLogosFile.logosListSerieA.roma;
    } else {
      const lowercaseTeamName = teamName.toLowerCase();
      return allLogosFile.logosListSerieA[lowercaseTeamName];
    }
  }
  getTeamLogoUrlPremierLeague(teamName: string): string | undefined {
    if (teamName === 'Aston Villa') {
      return allLogosFile.logosListPremierLeague['aston_villa'];
    } else if (teamName === 'Crystal Palace') {
      return allLogosFile.logosListPremierLeague['crystal_palace'];
    } else if (teamName === 'Manchester City') {
      return allLogosFile.logosListPremierLeague['manchester_city'];
    } else if (teamName === 'Manchester United') {
      return allLogosFile.logosListPremierLeague['manchester_united'];
    } else if (teamName === 'Nottingham Forest') {
      return allLogosFile.logosListPremierLeague['nottingham_forest'];
    } else if (teamName === 'Sheffield Utd') {
      return allLogosFile.logosListPremierLeague['sheffield'];
    } else if (teamName === 'West Ham') {
      return allLogosFile.logosListPremierLeague['west_ham'];
    } else {
      const lowercaseTeamName = teamName.toLowerCase();
      return allLogosFile.logosListPremierLeague[lowercaseTeamName];
    }
  }
  getTeamLogoUrlSerieB(teamName: string): string | undefined {
    const lowercaseTeamName = teamName.toLowerCase();
    return allLogosFile.logosListSerieB[lowercaseTeamName];
  }
  getTeamLogoUrlChampionship(teamName: string): string | undefined {
    if (teamName === 'Bristol City') {
      return allLogosFile.logosListChampionship.bristol_city;
    } else if (teamName === 'Hull City') {
      return allLogosFile.logosListChampionship.hull_city;
    } else if (teamName === 'Sheffield Wednesday') {
      return allLogosFile.logosListChampionship.sheffield_wednesday;
    } else if (teamName === 'Stoke City') {
      return allLogosFile.logosListChampionship.stoke_city;
    } else if (teamName === 'West Brom') {
      return allLogosFile.logosListChampionship.west_brom;
    } else {
      const lowercaseTeamName = teamName.toLowerCase();
      return allLogosFile.logosListChampionship[lowercaseTeamName];
    }
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
