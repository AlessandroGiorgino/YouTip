import { Response } from './../../interfaces/predictions-by-id';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchesService } from 'src/app/fetches.service';
import {
  League,
  ResponseStandings,
  Standing,
  Standings,
} from 'src/app/interfaces/standings';
@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MatchListComponent {
  predictionsById!: Response[];
  constructor(private route: ActivatedRoute, private srv: FetchesService) {}
  pssApiFootPred = this.srv.pssApiFootPred;
  id!: string | null;
  standings!: ResponseStandings[];
  homeTeam!: string;
  awayTeam!: string;
  data: any;
  options: any;

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
      this.srv.idLeague = this.predictionsById[0].league.id;
      this.homeTeam = this.predictionsById[0].teams.home.name;
      this.awayTeam = this.predictionsById[0].teams.away.name;
      console.log('Predictions: ', this.predictionsById);
      //qui chart
      //chart da qui
      //prima chart
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
        labels: [
          this.predictionsById[0].teams.home.name,
          'Draw',
          this.predictionsById[0].teams.away.name,
        ],
        datasets: [
          {
            data: [
              this.predictionsById[0].predictions.percent.home.slice(0, 2),
              this.predictionsById[0].predictions.percent.draw.slice(0, 2),
              this.predictionsById[0].predictions.percent.away.slice(0, 2),
            ],
            backgroundColor: [
              documentStyle.getPropertyValue('--blue-500'),
              documentStyle.getPropertyValue('--yellow-500'),
              documentStyle.getPropertyValue('--green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--blue-400'),
              documentStyle.getPropertyValue('--yellow-400'),
              documentStyle.getPropertyValue('--green-400'),
            ],
          },
        ],
      };

      this.options = {
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
      };
      this.srv.getStandingsByLeagueId().subscribe((resStandings) => {
        this.standings = resStandings.response;
        console.log('Standings: ', this.standings);
      });
    });
  }
}
