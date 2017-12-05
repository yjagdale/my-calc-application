import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calc',
  templateUrl: 'calc.html'
})
export class Calc {
  buttonsNumber: Array<any> = [
    { 'displayText': 'AC', 'style': 'style1', 'value': 'OPR_CLEAR' },
    { 'displayText': '+/-', 'style': 'style1', 'value': 'OPR_CHANGESIGN' },
    { 'displayText': '%', 'style': 'style1', 'value': 'OPR_PER' },
    { 'displayText': '/', 'style': 'style2', 'value': 'OPR_DIV' },
    { 'displayText': '7', 'style': '', 'value': 7 },
    { 'displayText': '8', 'style': '', 'value': 8 },
    { 'displayText': '9', 'style': '', 'value': 9 },
    { 'displayText': '*', 'style': 'style2', 'value': 'OPR_MULT' },
    { 'displayText': '4', 'style': '', 'value': 4 },
    { 'displayText': '5', 'style': '', 'value': 5 },
    { 'displayText': '6', 'style': '', 'value': 6 },
    { 'displayText': '-', 'style': 'style2', 'value': 'OPR_SUB' },
    { 'displayText': '1', 'style': '', 'value': 1 },
    { 'displayText': '2', 'style': '', 'value': 2 },
    { 'displayText': '3', 'style': '', 'value': 3 },
    { 'displayText': '+', 'style': 'style2', 'value': 'OPR_ADD' },
    { 'displayText': '0', 'style': 'style4', 'value': 0 },
    { 'displayText': '.', 'style': '', 'value': 'OPR_DOT' },
    { 'displayText': '=', 'style': 'style2', 'value': 'OPR_EQL' }
  ];
  multiply: number = 1;
  public resultWindow: any = { 'prevValue': '', currentValue: '', totalCalc: 0 };
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  resultupdate(number) {
    if (isNaN(number.value)) {
      console.log('Result from screen is ' + this.resultWindow.totalCalc);
      let opr = number.value.split('_')[1];
      switch (opr) {
        case 'CLEAR':
          this.clearOpration();
          break;
        case 'CHANGESIGN':
          this.changeSign();
          break;
        default:
          console.log('Default case');
          break;

      }
    } else {
      this.resultWindow.currentValue = this.resultWindow.currentValue + number.value;
      this.resultWindow.totalCalc = +this.resultWindow.currentValue;
    }
  }

  clearOpration() {
    this.resultWindow.currentValue = '';
    this.resultWindow.prevValue = '';
    this.resultWindow.totalCalc = 0;
  }

  changeSign() {
    console.log('In Change sign', this.resultWindow.currentValue);
    if (this.resultWindow.totalCalc < 0) {
      this.resultWindow.currentValue = this.resultWindow.currentValue.replace('-', '');
    } else {
      this.resultWindow.currentValue = '-' + this.resultWindow.currentValue;
    }
    this.resultWindow.totalCalc = this.resultWindow.totalCalc * (-1);
  }


}
