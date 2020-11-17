import { Component, OnInit, Input } from '@angular/core';

const PC_CARDS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      margin: auto;
    }`
  ]
})
export class CardItemComponent implements OnInit {
  playingCards = PC_CARDS;
  @Input() card = 'spade';
  iconClassName = '';
  borderClassName = '';
  constructor() { }

  ngOnInit() {
    const color = this.card === 'spade' || this.card === 'club' ? 'black' : 'red';
    this.iconClassName = `icon-${this.card}`;
    this.borderClassName = `border-${color} ${color}`;
  }

}
