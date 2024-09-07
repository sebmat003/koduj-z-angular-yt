import { Component } from '@angular/core';
import { InputNumberComponent } from './custom-control/input-number/input-number.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [InputNumberComponent, ReactiveFormsModule],
})
export class AppComponent {
  form = new FormGroup({
    control: new FormControl(),
  });
}
