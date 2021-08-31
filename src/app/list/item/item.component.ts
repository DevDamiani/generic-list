
import { Component, Input, OnInit } from '@angular/core';
import { Ims } from 'src/app/shared/interface/ims.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  @Input() Ims!: Ims;

  ngOnInit(): void {



  }

}
