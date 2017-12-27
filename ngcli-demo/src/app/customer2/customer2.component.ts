import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Customer2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
