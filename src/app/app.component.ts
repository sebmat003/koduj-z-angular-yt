import { Component } from '@angular/core';
import { ParentComponent } from './ng-template-ng-content/ng-content-usage.component';
import { NgTemplateUsageComponent } from "./ng-template-ng-content/ng-template-usage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ParentComponent, NgTemplateUsageComponent],
})
export class AppComponent {}
