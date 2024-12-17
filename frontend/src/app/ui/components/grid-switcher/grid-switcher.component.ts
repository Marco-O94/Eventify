import { Component, model } from '@angular/core';

@Component({
  selector: 'app-grid-switcher',
  imports: [],
  templateUrl: './grid-switcher.component.html',
  styleUrl: './grid-switcher.component.scss',
})
export class GridSwitcherComponent {
  gridMode = model<'grid' | 'list'>('grid');

  switchMode(mode: 'grid' | 'list') {
    this.gridMode.set(mode);
  }
}
