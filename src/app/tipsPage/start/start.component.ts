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
  //imparato: per tipizzare un array di oggetti si scirve {}[]=[]
  fixturesSerieA: {}[] = [];
  constructor(private srv: FetchesService) {}
  ngOnInit(): void {
    this.srv.getFixturesSerieA().subscribe((res) => {
      console.log(res);
      this.fixturesSerieA.push(res as FixturesSerieA);
      console.log(this.fixturesSerieA);
    });
  }
}
