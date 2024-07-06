import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: Location;

  constructor() {}
}
