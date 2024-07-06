import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];

  ngOnInit() {
    console.log(this.unitsList);
  }

  constructor() {}
}
