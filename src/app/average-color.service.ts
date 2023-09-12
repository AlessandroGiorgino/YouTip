import { Injectable } from '@angular/core';
import { FastAverageColor } from 'fast-average-color';
import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AverageColorService {
  constructor() {}
  colorHomeTeam!: string;
  colorAwayTeam!: string;
  @HostListener('window:load')
  onLoad() {
    const fac = new FastAverageColor();
    const containerHome: any = document.getElementById('home');
    const colorHome = fac.getColor(containerHome.querySelector('img'));

    this.colorHomeTeam = colorHome.rgba;

    console.log(this.colorHomeTeam);
    const fac1 = new FastAverageColor();
    const containerAway: any = document.getElementById('away');
    const colorAway = fac.getColor(containerAway.querySelector('img'));

    this.colorAwayTeam = colorAway.rgba;

    console.log(this.colorAwayTeam);
  }
}
