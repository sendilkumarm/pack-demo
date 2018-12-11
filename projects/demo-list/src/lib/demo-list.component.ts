import { Component, OnInit } from '@angular/core';
import { DemoCoreService } from '@sen/demo-core';

@Component({
  selector: 'lib-demo-list',
  template: `
    <p>
      demo-list works!
    </p>
  `,
  styles: []
})
export class DemoListComponent implements OnInit {

  constructor(private dcs: DemoCoreService) { }

  ngOnInit() {
  }

}
