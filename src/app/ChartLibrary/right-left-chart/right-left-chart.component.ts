import { Component } from '@angular/core';
import { nodes1 } from 'src/app/Shared/material-design/DataBase/Node';
export const hierarchyData = [
  {
    name: 'Jay',
    children: [
      {
        name: 'Mazhar',
        children: [
          { name: 'FrondEND' },
          { name: 'FrondEND' }
        ]
      },
      {
        name: 'Rithym',
        children: [
          {
            name: 'bACKEND', children: [
              { name: 'FrondEND', },
              { name: 'FrondEND' },
              { name: 'FrondEND' }
            ]
          },
          { name: 'DATABASE' },
          { name: 'SQL Developer' }
        ]
      },
      { name: 'Apurva' }
    ]
  }
];

@Component({
  selector: 'app-right-left-chart',
  templateUrl: './right-left-chart.component.html',
  styleUrls: ['./right-left-chart.component.scss']
})


export class RightLeftChartComponent {
  hierarchyData = nodes1;

}
