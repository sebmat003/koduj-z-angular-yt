import { Component } from '@angular/core';
@Component({
  selector: 'child',
  standalone: true,
  template: ` <p>A</p>
    <p>B</p>
    <p>C</p>
    <p>Custom: <ng-content></ng-content></p>`,
})
export class ChildComponent {}

@Component({
  selector: 'parent',
  standalone: true,
  template: `<child> X </child>`,
  imports: [ChildComponent],
})
export class ParentComponent {}
