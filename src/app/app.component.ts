import { Component } from '@angular/core';
import { ValidatorUsageComponent } from './custom-validator/validator-usage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ValidatorUsageComponent],
})
export class AppComponent {}
