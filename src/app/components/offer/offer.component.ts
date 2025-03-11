import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  preloadLang = input<any>();
  preloadCurr = input<any>();
  wrapper = viewChild<ElementRef<HTMLDivElement>>('wrapper');

  ngOnInit() {
    // this.wrapper()!.nativeElement.style.flexDirection = 'row-reverse';
  }
}
