import { Response, FixturesSerieA } from './../../interfaces/fixtures-serie-a';
import { Component } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  //qui
  fixturesSerieA: Response[] = [];
  constructor(private srv: FetchesService) {}
  getFixturesSerieA() {
    this.srv.getFixturesSerieA().subscribe((res) => {
      // this.fixturesSerieA.push(res as Response);
      this.fixturesSerieA = res.response;
      console.log(this.fixturesSerieA);
    });
  }
  ngOnInit() {
    this.getFixturesSerieA();
  }
}
