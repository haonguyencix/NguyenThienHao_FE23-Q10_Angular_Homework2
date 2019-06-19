import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  public DSSP: any = [];

  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }

  themSP(maSP, tenSP, giaSP) {
    const objSP = {
      ma: maSP,
      ten: tenSP,
      gia: giaSP
    }
    this.DSSP.push(objSP);
    this.setLocalStorage();
  }

  xoaSP(index){
    this.DSSP.splice(index, 1);
    this.setLocalStorage();
  }

  setLocalStorage(){
    localStorage.setItem('DSSP', JSON.stringify(this.DSSP));
  }

  getLocalStorage() {
    if (localStorage.getItem('DSSP') != null) {
      this.DSSP = JSON.parse(localStorage.getItem('DSSP'));
    }
  }
}
