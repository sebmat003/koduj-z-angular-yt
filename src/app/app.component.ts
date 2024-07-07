import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example1Component } from './components/example-1/example-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, Example1Component],
})
export class AppComponent {
  title = 'loader-directive';
}
