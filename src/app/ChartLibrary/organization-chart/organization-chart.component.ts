import { Component } from '@angular/core';
import { nodes,orgChartData,OrganizationData, OrganizationData1 } from 'src/app/Shared/material-design/DataBase/Node';
import {
  GoogleChartInterface
} from 'ng2-google-charts';
@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent {
  emp:any = '200px'
  data = OrganizationData;
  data1 = OrganizationData1.reverse();

  
  public orgChart: GoogleChartInterface = {
    chartType: 'OrgChart',
    dataTable: [
      ['Name',   'Manager', 'Tooltip'],
      [{v: 'Jey', f: 'Jey<div style="color:red; font-style:italic">Manager</div>'}, '', 'The President'],
      [{v: 'Apurva', f: 'Apurva<div style="color:red; font-style:italic">Team Lead</div>'}, 'Jey', 'VP'],
      [{v:'Rithym', f: 'Rithym<div style="color:red; font-style:italic">Sr. Engineer</div>'}, 'Apurva', 'SE'],
      [{v:'Mazhar', f: 'Mazhar<div style="color:red; font-style:italic">Sr. Engineer</div>'}, 'Apurva', 'SE'],
      [{v:'Ganesh', f: 'Ganesh<div style="color:red; font-style:italic">Engineer</div>'}, 'Mazhar', 'JE']
    ],
    options: {
      allowHtml: true,
      allowCollapse: true,
   
    }
  };

}
