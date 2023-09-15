import { Component, ViewEncapsulation } from '@angular/core';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  getDatabase,
} from '@angular/fire/database';
import { AllUserBets, UserBets } from 'src/app/interfaces/userBets';

@Component({
  selector: 'app-your-tips',
  templateUrl: './your-tips.component.html',
  styleUrls: ['./your-tips.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class YourTipsComponent {
  //array di tutte le scommesse
  tips: AllUserBets[] = [];
  constructor(private db: Database) {}
  // richiamo all'id in localstorage
  ngOnInit() {
    let storedValue = JSON.parse(localStorage['user']);
    storedValue = storedValue[Object.keys(storedValue)[0]];
    //richiamo al db
    const tipsInDb = ref(this.db, `user/${storedValue}/`);
    onValue(tipsInDb, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.tips = Object.values(data);
      console.log(this.tips);
    });
  }
}
