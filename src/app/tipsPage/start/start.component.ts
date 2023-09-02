import { Response, Fixtures } from '../../interfaces/fixtures';
import { Component, ViewEncapsulation } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { MatchListComponent } from 'src/app/modals/match-list/match-list.component';
import { CurrentRoundResponse } from 'src/app/interfaces/currentRoundResponse';

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
  constructor(private srv: FetchesService) {}

  getCurrentRound(): void {
    //qui abbiamo  il current round
    this.srv.getCurrentRoundSerieA().subscribe((res) => {
      // console.log(res.response);

      // console.log(res.response[0]);

      this.currentRound = res.response[0];
      this.srv.currentRoundRes = this.currentRound;
      // this.srv.currentRoundRes = this.currentRound[0];

      this.srv.getFixturesSerieA().subscribe((res) => {
        console.log(this.srv.currentRoundRes);

        this.fixturesSerieA = res.response;
        console.log(this.fixturesSerieA);
      });
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
    this.getCurrentRound();
    this.getFixturesSerieB();
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
