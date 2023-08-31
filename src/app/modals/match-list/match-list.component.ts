import { Component } from '@angular/core';
import { StartComponent } from 'src/app/tipsPage/start/start.component';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent {
  constructor(private start: StartComponent) {}
}
