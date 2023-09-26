import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hierachy-node',
  templateUrl: './hierachy-node.component.html',
  styleUrls: ['./hierachy-node.component.scss']
})
export class HierachyNodeComponent {
  @Input() node: any;
}
