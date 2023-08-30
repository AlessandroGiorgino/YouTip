import { Response } from './../../interfaces/fixtures-serie-a';
import { Component } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';
import { FixturesSerieA } from 'src/app/interfaces/fixtures-serie-a';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  //qui
  fixturesSerieA: FixturesSerieA[] = [];
  constructor(private srv: FetchesService) {}
  getFixturesSerieA() {
    this.srv.getFixturesSerieA().subscribe((res) => {
      this.fixturesSerieA.push(res as FixturesSerieA);
      // this.fixturesSerieA = res as FixturesSerieA;
      console.log(this.fixturesSerieA);
      console.log(this.fixturesSerieA[0].response[0].teams.home.name);
    });
  }
  ngOnInit() {
    this.getFixturesSerieA();
  }
}
