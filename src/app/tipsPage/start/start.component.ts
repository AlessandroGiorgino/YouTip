import { Component } from '@angular/core';
import { FetchesService } from 'src/app/fetches.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  constructor(private srv: FetchesService) {}
  ngOnInit(): void {
    this.srv.getFixturesSerieA().subscribe((res) => {
      console.log(res);
    });
  }
}
