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
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-your-tips',
  templateUrl: './your-tips.component.html',
  styleUrls: ['./your-tips.component.scss'],
})
export class YourTipsComponent {
  //array di tutte le scommesse
  tips: AllUserBets[] = [];
  tipsId: any = [];

  // value toinput
  newBet: string[] = [];

  constructor(private db: Database, private route: Router) {}
  // richiamo all'id in localstorage
  getData() {
    let storedValue = JSON.parse(localStorage['user']);
    let storedValueId = storedValue[Object.keys(storedValue)[0]];
    let tipsInDb = ref(this.db, `user/${storedValueId}/`);
    onValue(tipsInDb, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.tipsId.push(data);
      console.log(this.tipsId);

      this.tips = Object.values(data);
      console.log(this.tips);
      this.tips.forEach((i) => {
        this.newBet.push('');
      });
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
  updateData(matchId: number, i: number) {
    let storedValue = JSON.parse(localStorage['user']);
    let storedValueId = storedValue[Object.keys(storedValue)[0]];
    const betChosen: string = this.newBet[i];
    update(ref(this.db, `user/${storedValueId}/` + matchId), {
      bet: betChosen,
    });
    alert('bet updated');
  }

  deleteData(matchId: number) {
    let storedValue = JSON.parse(localStorage['user']);
    let storedValueId = storedValue[Object.keys(storedValue)[0]];
    remove(ref(this.db, `user/${storedValueId}/` + matchId));
  }
  //generate opdf
  generatePDF() {
    const doc = new jsPDF('p', 'mm', [297, 210]);
    //   const content = this.tips.forEach((tip, i) => {
    //     `
    // <p>${tip.match}</p>
    // -
    // <p>${tip.bet}</p>`;
    //   });
    let list: [] | any = [];
    this.tips.forEach((tip, i) => {
      list.push(`
        ${tip.match} ----- ${tip.bet}
      `);
    });
    //fare html
    // doc.html()
    doc.html;
    doc.text(list, 10, 10);
    const pdf = doc.output('blob');
    FileSaver.saveAs(pdf, 'Your Tips');
  }
}
