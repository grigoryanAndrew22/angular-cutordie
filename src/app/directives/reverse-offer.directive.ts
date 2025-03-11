import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appReverseOffer]',
  standalone: true,
  host: {
    '(click)': 'onClick()',
  },
})
export class ReverseOfferDirective implements OnInit {
  private hostElement = inject(ElementRef);
  ngOnInit(): void {
    this.hostElement.nativeElement.childNodes[0].style.flexDirection =
      'row-reverse';
    this.hostElement.nativeElement.childNodes[1].style.transform = 'scaleX(-1)';
  }
  onClick() {
    console.log('you clicked on reversed offer');
  }
}
