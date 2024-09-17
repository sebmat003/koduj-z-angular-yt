import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DATA } from './data.const';

@Component({
  selector: 'app-virtual-scroll',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './virtual-scroll.component.html',
  styleUrl: './virtual-scroll.component.scss',
})
export class VirtualScrollComponent {
  readonly data = DATA;
}
