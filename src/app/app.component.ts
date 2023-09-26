import { Component } from '@angular/core';
import { Tree } from './ChartLibrary/node-design/node-design.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinicalapp';

  tree:  any = {  
    name: "CEO",
    children: [
      {
        name: "Ganesh",
        designation:"UNTITLE",
        children: [
          { name: "Tech Lead",designation:"UNTITLE", children: [
            { name: "Frontend Dev 1" },
            { name: "Frontend Dev 2" },
            
          ] },
          {
            name: "Team Lead",
            designation:"UNTITLE",
            
            children: [
             
              { name: "Frontend Dev 3",designation:"UNTITLE",},
              { name: "Backend Dev 1" },
              { name: "Backend Dev 2" }
            ]
          }
        ]
      },
      { name: "CFO",
      designation:"UNTITLE",
      children: [
        { name: "Tech Lead",designation:"UNTITLE", },
        {
          name: "Team Lead",
          children: [
            { name: "Frontend Dev 1",designation:"UNTITLE", },
            { name: "Frontend Dev 2" },
            { name: "Frontend Dev 3" },
            { name: "Backend Dev 1" },
            { name: "Backend Dev 2" }
          ]
        }
      ] }
    ]
  };
  tree1:any[] = [{  
    name: "CEO",
    children: [
      {
        name: "Ganesh",
        designation:"UNTITLE",
        children: [
          { name: "Tech Lead",designation:"UNTITLE", children: [
            { name: "Frontend Dev 1" },
            { name: "Frontend Dev 2" },
            
          ] },
          {
            name: "Team Lead",
            designation:"UNTITLE",
            
            children: [
             
              { name: "Frontend Dev 3",designation:"UNTITLE",},
              { name: "Backend Dev 1" },
              { name: "Backend Dev 2" }
            ]
          }
        ]
      },
      { name: "CFO",
      designation:"UNTITLE",
      children: [
        { name: "Tech Lead",designation:"UNTITLE", },
        {
          name: "Team Lead",
          children: [
            { name: "Frontend Dev 1",designation:"UNTITLE", },
            { name: "Frontend Dev 2" },
            { name: "Frontend Dev 3" },
            { name: "Backend Dev 1" },
            { name: "Backend Dev 2" ,children: [
             
              { name: "Frontend Dev 3",designation:"UNTITLE",},
              { name: "Backend Dev 1" },
              { name: "Backend Dev 2" }
            ] }
          ]
        }
      ] }
    ]
  }]
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

  hierarchyData = [
    {
      name: 'Child',
      children: [
        {
          name: 'Grand Child',
          children: [
            { name: 'Great Grand Child' },
            { name: 'Great Grand Child' }
          ]
        },
        {
          name: 'Grand Child',
          children: [
            { name: 'Great Grand Child', },
            { name: 'Great Grand Child' },
            { name: 'Great Grand Child' }
          ]
        },
        { name: 'Grand Child' }
      ]
    }
  ];

  session:any={
    id:1
  };

  SaveData(){
    let data ={id:3,name:'xyz'}

    localStorage.setItem("Session",JSON.stringify(data))
  }

  loadData(){
    let data:any = localStorage.getItem('Session')
    this.session = JSON.parse(data)
    console.log(data)
  }
}
