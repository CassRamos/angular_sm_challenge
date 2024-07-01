import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormsComponent } from '../../components/forms/forms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
