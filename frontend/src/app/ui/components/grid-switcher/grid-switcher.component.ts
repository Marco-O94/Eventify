import { Component, model } from '@angular/core';
import { IconComponent } from '../icon-component/icon.component';

@Component({
  selector: 'app-grid-switcher',
  imports: [IconComponent],
  templateUrl: './grid-switcher.component.html',
  styleUrl: './grid-switcher.component.scss',
})
export class GridSwitcherComponent {
  // Il model è un modo per definire una variabile che può essere passata da un altro componente parent e quest'ultimo si aggiorna
  // Si può definire come un tipo di variabile che funge sia da input che da output
  gridMode = model<'grid' | 'list'>('list');

  switchMode(mode: 'grid' | 'list') {
    this.gridMode.update((v) => mode);
  }
}
