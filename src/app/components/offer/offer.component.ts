import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { NotAvailableService } from '../../services/not-available.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  private notAvailableService = inject(NotAvailableService);
  preloadLang = input<any>();
  preloadCurr = input<any>();
  wrapper = viewChild<ElementRef<HTMLDivElement>>('wrapper');

  showNotAvailable(event: MouseEvent) {
    console.log(event);
    this.notAvailableService.showNotAvailable();
  }
  ngOnInit() {
    // this.wrapper()!.nativeElement.style.flexDirection = 'row-reverse';
  }
}
