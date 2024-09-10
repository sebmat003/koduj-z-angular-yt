import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-template-usage',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './ng-template-usage.component.html',
})
export class NgTemplateUsageComponent {}
