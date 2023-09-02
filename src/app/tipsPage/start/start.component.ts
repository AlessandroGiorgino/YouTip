import { Response, Fixtures } from '../../interfaces/fixtures';
import { Component, ViewEncapsulation } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { MatchListComponent } from 'src/app/modals/match-list/match-list.component';
import {
  CurrentRoundResponse,
  ResponseCurrent,
} from 'src/app/interfaces/currentRoundResponse';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StartComponent {
  //qui
  currentRound: ResponseCurrent[] = [];
  fixturesSerieA: Response[] = [];
  fixturesSerieB: Response[] = [];
  constructor(private srv: FetchesService) {}
  getCurrentRound() {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSerieA().subscribe((res) => {
      this.currentRound = res.response;
      //continua a darmi come undefined quella che chiaramente è una stringa
      console.log(this.currentRound);
      this.srv.currentRoundRes = this.currentRound[0].round;
    });
  }
  getFixturesSerieA() {
    this.srv.getFixturesSerieA().subscribe((res) => {
      // this.fixturesSerieA.push(res as Response);
      console.log(res);

      this.fixturesSerieA = res.response;
      console.log(this.fixturesSerieA);
    });
  }
  getFixturesSerieB() {
    this.srv.getFixturesSerieB().subscribe((res) => {
      // this.fixturesSerieA.push(res as Response);

      this.fixturesSerieB = res.response;
      console.log(this.fixturesSerieB);
    });
  }
  ngOnInit() {
    this.getFixturesSerieA();
    this.getFixturesSerieB();
    this.getCurrentRound();
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
