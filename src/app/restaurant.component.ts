import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  template: `
    <p>
      restaurant works!

      {{restaurant.name}}
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
