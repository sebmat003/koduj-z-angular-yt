import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input() maxNumber = 10000;
  @Input() minNumber = 0;
  @Input() placeholder = 'Placeholder';

  constructor(public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  writeValue() {}

  registerOnChange() {}

  registerOnTouched() {}
}
