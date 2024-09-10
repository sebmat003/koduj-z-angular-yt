import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PipeUsageComponent } from './custom-pipe/pipe-usage/pipe-usage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [PipeUsageComponent],
})
export class AppComponent {
  form = new FormGroup({
    control: new FormControl(),
  });
}
