import { Component, OnInit, Input } from '@angular/core';
export interface Tree {
  name: string;
  children?: Tree[];
}
@Component({
  selector: 'app-node-design',
  templateUrl: './node-design.component.html',
  styleUrls: ['./node-design.component.scss']
})
export class NodeDesignComponent {

  @Input()
  name!: any;
  @Input()
  children!: any[];
  @Input()
  Designation :any;
  @Input()
  Age :any;
  

  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }
}
