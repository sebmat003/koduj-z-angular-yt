import { Component } from '@angular/core';
import { NgrxStoreUsageComponent } from "./store/ngrx-store-usage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgrxStoreUsageComponent],
})
export class AppComponent {}
