import { Component } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  loader: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private main: MainService) {
    this.subscription = this.main.loader.subscribe((loader) => {
      this.loader = loader;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
