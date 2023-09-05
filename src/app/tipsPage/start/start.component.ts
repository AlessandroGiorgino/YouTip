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
  constructor(
    private srv: FetchesService,
    private login: LoginPageComponent,
    private route: Router
  ) {}
  //check se è loggato

  getCurrentRound(): void {
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
      //qui la get serie b
      this.srv.getFixturesSerieB().subscribe((res) => {
        this.fixturesSerieB = res.response;
        console.log(this.fixturesSerieB);
      });
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user') === null) {
      this.route.navigate(['login']);
    } else {
      this.getCurrentRound();
    }
    console.log(this.login.isSignedIn);
  }
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
  //serieB single match modal

  modalSingleSeriebMatch: boolean = false;
  showModalSingleSeriebMatch() {
    this.modalSingleSeriebMatch = true;
  }
}
