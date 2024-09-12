import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.validator';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-validator-usage',
  standalone: true,
  template: `
    <mat-form-field>
      <input matInput [formControl]="name" placeholder="Type a name" />
    </mat-form-field>

    @if (name.errors; as errors) {
    <p>
      Word <b>{{ errors['forbiddenName'].value }}</b> is forbidden. Use
      different word.
    </p>
    }
  `,
  imports: [ReactiveFormsModule, MatFormField, MatInput, JsonPipe],
})
export class ValidatorUsageComponent {
  name = new FormControl('', {
    validators: [forbiddenNameValidator(/(React|Vue)/i)], //i - case-insensitive
  });
}
