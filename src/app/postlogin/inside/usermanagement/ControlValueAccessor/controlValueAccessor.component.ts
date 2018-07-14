import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
@Component({
  selector: 'app-controlvalueaccessor',
  templateUrl: './controlValueAccessor.component.html',
  styleUrls: ['./controlValueAccessor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: (c: FormControl) => {
        const err = {
          rangeError: {
            given: c.value,
            max: 10,
            min: 1
          }
        };

        return (c.value > 10 || c.value < 1) ? err : null;
      },
      multi: true
    }
  ]
})
export class ControlValueAccessorComponent implements OnInit, ControlValueAccessor  {

  stars: boolean[] = Array(5).fill(false);
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }
  constructor() {
    console.log(this.stars);
   }
    ngOnInit() {
  }

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }
  onTouched = () => { };
  rate(rating: number) {
    // this.stars = this.stars.map((_, i) => rating > i);
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }
  onChange = (rating: number) => { };
  writeValue(rating: number): void {
    console.log('writeValue');
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value);
  }
  registerOnChange(fn: (rating: number) => void): void {
    console.log('registerOnChange');
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState');
    this.disabled = isDisabled;
  }
}
