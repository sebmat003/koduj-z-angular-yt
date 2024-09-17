import { Component } from '@angular/core';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [VirtualScrollComponent],
})
export class AppComponent {}
