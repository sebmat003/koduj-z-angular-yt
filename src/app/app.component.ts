import { Component } from '@angular/core';
import { TranslateSiteComponent } from './translate-site/translate-site.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TranslateSiteComponent],
})
export class AppComponent {}
