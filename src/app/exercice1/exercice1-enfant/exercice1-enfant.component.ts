import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  result: number = 0;
  @Output() changementCompteur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.result++;
    this.changementCompteur.emit({result: this.result});
  }

  decrement() {
    this.result--;
    this.changementCompteur.emit({result: this.result});
  }

}
