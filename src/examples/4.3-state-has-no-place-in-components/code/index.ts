import { Component, Injectable } from '@angular/core';
import { State } from './state.service';

@Component({
  providers: [State],
  selector: 'app-root',
  template: `<ol>
    <li *ngFor="let item of list">
      <span>({{ item.id }})</span>
      <span>{{ item.value }}</span>
    </li>
  </ol>`,
  styles: [``]
})
export class AppComponent {
  list: { id: number, value: string }[];
  constructor(state: State) {
    this.list = state.getList();
  }
}
