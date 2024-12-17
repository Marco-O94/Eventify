import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly title = input<string>('Eventify');
  readonly description = input<string>(
    'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
  );
  readonly imageURL = input<string>(
    'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'
  );
  readonly buttonText = input<string>('Get Started');
}
