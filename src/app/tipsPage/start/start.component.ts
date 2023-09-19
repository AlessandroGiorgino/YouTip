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
  fixturesSerieA: Response[] = [];
  fixturesSerieB: Response[] = [];
  fixturesPremierLeague: Response[] = [];
  fixturesChampionship: Response[] = [];
  fixturesLiga: Response[] = [];
  fixturesSegundaDivision: Response[] = [];

  constructor(
    private srv: FetchesService,
    private route: Router,
    private auth: AuthenticationService
  ) {}
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

  ngOnInit() {
    if (
      localStorage.getItem('user') === null &&
      this.auth.emailConfirmed === false
    ) {
      this.route.navigate(['login']);
    } else {
      this.getCurrentRoundSerieA();
      this.getCurrentRoundSerieB();
      this.getCurrentRoundPremierLeague();
      this.getCurrentRoundChampionship();
      this.getCurrentRoundLiga();
      this.getCurrentRoundSegundaDivision();
    }
  }

  //unico per tutti
  modalMatches: boolean = false;
  // seriaA modal
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
}
