import { IconType } from '../types';

export interface MenuItems {
  label: string;
  icon: IconType;
  route: string;
}

export interface Event {
  id: number;
  title: string;
  content: string;
  abstract: string;
  categories?: (Category | undefined)[];
}

export interface Category {
  id: number;
  name: string;
  icon: IconType;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

export interface EventsFilters {
  categories?: Category[];
  date?: Date;
  location?: string;
  title?: string;
}
