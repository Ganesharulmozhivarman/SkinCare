import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node-child',
  templateUrl: './node-child.component.html',
  styleUrls: ['./node-child.component.scss']
})
export class NodeChildComponent {
  @Input()
  hierarchyData!: any[];
}
