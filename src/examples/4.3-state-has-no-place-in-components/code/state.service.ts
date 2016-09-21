import { Injectable } from '@angular/core';

@Injectable()
export class State {
  private list = [
    { id: 0, value: 'zero the hero' },
    { id: 1, value: 'first the worst' },
    { id: 2, value: 'second the best' },
    { id: 3, value: 'third the nerd' },
    { id: 4, value: 'fourth is a lowly composite' },
    { id: 5, value: 'fifth' },
    { id: 6, value: '6th' },
  ];
  getList() {
    return this.list;
  }
}
