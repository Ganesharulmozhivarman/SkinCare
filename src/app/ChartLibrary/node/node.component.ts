import { Component, Input } from '@angular/core';
import { Tree } from '../node-design/node-design.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {

  // @Input()
  // name!: any;
  // @Input()
  // children!: any[];
  @Input()
  hierarchyData!: any[];

  hierarchyData1 = [
    {
      name: 'Root',
      children: [
        {
          name: 'Node 1',
          children: [
            {
              name: 'Node 1.1',
              children: []
            },
            {
              name: 'Node 1.2',
              children: []
            }
          ]
        },
        {
          name: 'Node 2',
          children: []
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
    
  }
}
