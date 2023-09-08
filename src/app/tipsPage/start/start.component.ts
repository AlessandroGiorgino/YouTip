import { async } from '@angular/core/testing';
import { Response, Fixtures } from '../../interfaces/fixtures';
import { Component, ViewEncapsulation } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { MatchListComponent } from 'src/app/modals/match-list/match-list.component';
import { CurrentRoundResponse } from 'src/app/interfaces/currentRoundResponse';
import { LoginPageComponent } from 'src/app/home/login-page/login-page.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    private login: LoginPageComponent,
    private route: Router
  ) {}
  //check se è loggato e autologut

  getCurrentRoundSerieA(): void {
    //serie a
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSerieA().subscribe((res) => {
      // console.log(res.response);
      // console.log(res.response[0]);

      this.currentRound = res.response[0];

      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);

      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);
      //qui la get serieA
      this.srv.getFixturesSerieA().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesSerieA = res.response;
        console.log(this.fixturesSerieA);
      });
    });
  }
  getCurrentRoundSerieB(): void {
    //serie a
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSerieB().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);

      this.srv.getFixturesSerieB().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesSerieB = res.response;
        console.log(this.fixturesSerieB);
      });
    });
  }
  getCurrentRoundPremierLeague(): void {
    //serie a
    //qui abbiamo  il current round
    this.srv.getCurrentRoundPremierLeague().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);

      this.srv.getFixturesPremierLeague().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesPremierLeague = res.response;
        console.log(this.fixturesPremierLeague);
      });
    });
  }
  getCurrentRoundChampionship(): void {
    //serie a
    //qui abbiamo  il current round
    this.srv.getCurrentRoundChampionship().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);

      this.srv.getFixturesChampionship().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesChampionship = res.response;
        console.log(this.fixturesChampionship);
      });
    });
  }
  getCurrentRoundLiga(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundLiga().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);

      this.srv.getFixturesLiga().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesLiga = res.response;
        console.log(this.fixturesLiga);
      });
    });
  }
  getCurrentRoundSegundaDivision(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSegundaDivision().subscribe((res) => {
      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);
      this.srv.currentRoundRes = this.currentRound;
      console.log(this.srv.currentRoundRes);

      this.srv.getFixturesSegundaDivision().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesSegundaDivision = res.response;
        console.log(this.fixturesSegundaDivision);
      });
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    if (localStorage.getItem('user') === null) {
      this.route.navigate(['login']);
    } else {
      this.getCurrentRoundSerieA();
      this.getCurrentRoundSerieB();
      this.getCurrentRoundPremierLeague();
      this.getCurrentRoundChampionship();
      this.getCurrentRoundLiga();
      this.getCurrentRoundSegundaDivision();
    }
    console.log(this.login.isSignedIn);
    //auto logout fuori dopo tot tempo
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
