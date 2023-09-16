import { Component, ViewEncapsulation } from '@angular/core';
import {
  Database,
  set,
  ref,
  update,
  onValue,
  getDatabase,
  remove,
} from '@angular/fire/database';
import { Router } from '@angular/router';
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
  tipsId: any = [];
  storedValue = JSON.parse(localStorage['user']);
  storedValueId = this.storedValue[Object.keys(this.storedValue)[0]];
  tipsInDb = ref(this.db, `user/${this.storedValueId}/`);

  // value toinput
  newBet!: string;

  constructor(private db: Database, private route: Router) {}
  // richiamo all'id in localstorage
  getData() {
    onValue(this.tipsInDb, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.tipsId.push(data);
      console.log(this.tipsId);

      this.tips = Object.values(data);
      console.log(this.tips);
    });
  }
  ngOnInit() {
    if (localStorage.getItem('user') === null) {
      this.route.navigate(['login']);
    } else {
      this.getData();
    }
  }
  // update data
  updateData(matchId: number, betChosen: string) {
    this.newBet = betChosen;
    update(ref(this.db, `user/${this.storedValueId}/` + matchId), {
      bet: this.newBet,
    });
    alert('bet updated');
  }

  deleteData(matchId: number) {
    remove(ref(this.db, `user/${this.storedValueId}/` + matchId));
  }
}
