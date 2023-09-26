import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hierachy-template-node',
  templateUrl: './hierachy-template-node.component.html',
  styleUrls: ['./hierachy-template-node.component.scss']
})
export class HierachyTemplateNodeComponent {
  @Input()
  hierarchyData!: any[];


}
