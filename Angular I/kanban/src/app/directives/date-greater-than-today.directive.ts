import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateGreaterThanToday]',
})
export class DateGreaterThanTodayDirective {
  @Input() Date!: Date | string;

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit() {
    const dateFormat = new Date(this.Date);
    const today = new Date();
    if (today < dateFormat) {
      console.log('if data');
      this.element.nativeElement.classList.add('bg-red');
    }
  }
}
