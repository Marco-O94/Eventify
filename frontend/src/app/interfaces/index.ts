import { IconType } from '../types';

export interface MenuItems {
  label: string;
  icon: IconType;
  route: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  price: number;
  category: 'Musica' | 'Teatro' | 'Sport' | 'Conferenza' | 'Altro';
  image?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}
