import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive()
export abstract class AbstractFormControlComponent
  implements ControlValueAccessor
{
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
