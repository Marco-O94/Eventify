import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private $loader = new BehaviorSubject<boolean>(false);
  loader: Observable<boolean> = this.$loader.asObservable();
  constructor() {}

  toggleLoader() {
    this.$loader.next(!this.loader);
  }
}
