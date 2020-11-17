import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    :host {
      display: grid;
    }
  `]
})
export class AppComponent {
  title = 'deck-of-cards';
  pcCards = [
    {name: 'spade', show: true, displayLabel: 'Spades'},
    {name: 'heart', show: true, displayLabel: 'Hearts'},
    {name: 'club', show: true, displayLabel: 'Clubs'},
    {name: 'diamond', show: true, displayLabel: 'Diamonds'},
  ];
}
