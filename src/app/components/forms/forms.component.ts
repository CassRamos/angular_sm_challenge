import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitsService: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    unitsService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onsubmit(): void {
    let { showClosed, hour } = this.formGroup.value;

    this.filteredResults = this.filterUnitsService.filter(
      this.results,
      showClosed,
      hour
    );
    this.unitsService.setFilteredUnits(this.filteredResults);
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
