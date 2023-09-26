import { Component } from '@angular/core';
import { nodes1 } from 'src/app/Shared/material-design/DataBase/Node';

// data.ts

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
  selector: 'app-hierachy-template',
  templateUrl: './hierachy-template.component.html',
  styleUrls: ['./hierachy-template.component.scss']
})
export class HierachyTemplateComponent {
  hierarchyData = nodes1;

  createTemplate(children: any) {
    const conditionCheck: boolean = children ? true : false
    let template: any = ` <li>
    <a href="#">
        <img src="../../../assets/Images/ProfileDummy/Profile5.jpg">
        <span>{{ ${children.name} }}</span>
      </a>
    </li>
    <ul *ngIf="${this.createTemplate(children.children)}" data-template> <ul>
    `

    const element = document.querySelector('[data-template-1]');
    element?.appendChild(template);
    return conditionCheck;



  }

}
