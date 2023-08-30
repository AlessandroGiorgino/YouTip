import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FetchesService {
  pssApiFootPred: string = environment.API_KEY_FOOT_PRED;
  pssApiFootNew: string = environment.API_KEY_AP_FOOT;
  constructor() {}
}
