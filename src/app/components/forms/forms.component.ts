import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  results = [ReactiveFormsModule];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private getUnitsService: GetUnitsService
  ) {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });

    getUnitsService.getAllUnits().subscribe((data) => console.log(data));
  }

  onsubmit(): void {
    console.log(this.formGroup.value);
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
