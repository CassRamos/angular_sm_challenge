import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsComponent } from '../../components/forms/forms.component';
import { CardsListComponent } from '../../components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormsComponent, CardsListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitsService: GetUnitsService) {}

  onSubmit() {
    this.unitsList = this.unitsService.getFilteredUnits();
    this.showList.next(true);
  }
}
