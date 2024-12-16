import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { menuItems } from '../../../utils/items';
import { MenuItems } from '../../../interfaces';
import { IconComponent } from '../../components/icon-component/icon.component';
@Component({
  selector: 'app-sidebar',
  imports: [NavbarComponent, RouterLink, IconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor() {}
  menuItems: MenuItems[] = menuItems;
}
