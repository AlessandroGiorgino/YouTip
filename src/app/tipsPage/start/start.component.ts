import { Response, FixturesSerieA } from './../../interfaces/fixtures-serie-a';
import { Component, ViewEncapsulation } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { MatchListComponent } from 'src/app/modals/match-list/match-list.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StartComponent {
  //qui
  fixturesSerieA: Response[] = [];
  fixturesSerieB: Response[] = [];
  constructor(private srv: FetchesService) {}
  getFixturesSerieA() {
    this.srv.getFixturesSerieA().subscribe((res) => {
      // this.fixturesSerieA.push(res as Response);
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
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
