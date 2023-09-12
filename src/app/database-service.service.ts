import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseServiceService {
  databaseURL: string =
    'https://console.firebase.google.com/project/youtip-b83d1/database/youtip-b83d1-default-rtdb/data/~2F';
}
