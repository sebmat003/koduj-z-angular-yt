import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { LoaderDirective } from './loader.directive';

@Component({
  selector: 'app-directive-usage',
  standalone: true,
  imports: [LoaderDirective],
  templateUrl: './example-2.component.html',
})
export class Example1Component implements OnInit {
  loading = true;

  ngOnInit() {
    timer(2000).subscribe(() => (this.loading = false));
  }
}
