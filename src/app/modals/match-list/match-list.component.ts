import { Response } from './../../interfaces/predictions-by-id';
import { Component } from '@angular/core';
import { StartComponent } from 'src/app/tipsPage/start/start.component';
import { ActivatedRoute } from '@angular/router';
import { FetchesService } from 'src/app/fetches.service';
@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent {
  predictionsById: Response[] = [];
  constructor(private route: ActivatedRoute, private srv: FetchesService) {}
  pssApiFootPred = this.srv.pssApiFootPred;
  id!: string | null;
  ngOnInit() {
    //ogni volta carica pagina prende id in alto
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    //get della partita
    //prima facciamo combaciare l'id nel service con quesllo effettivo della partita
    this.srv.idForSingleMatch = this.id;

    this.srv.getPredictionByMatchId().subscribe((res) => {

      this.predictionsById = res.response;

    });
    //qui abbiamo  il current round che usiamo poi vediamo per cosa
    this.srv.getCurrentRoundSerieA().subscribe((res) => {
    });
  }
  //richiamare service e fare nuova get sull'id
}
