import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-example-1',
  standalone: true,
  templateUrl: './example-1.component.html',
  imports: [LoaderComponent],
})
export class Example1Component implements OnInit {
  loading = true;

  ngOnInit() {
    timer(2000).subscribe(() => (this.loading = false));
  }
}
