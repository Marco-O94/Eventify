import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  constructor() {
    register();
  }
}
