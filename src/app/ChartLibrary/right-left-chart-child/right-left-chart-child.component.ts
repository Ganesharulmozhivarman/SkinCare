import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-left-chart-child',
  templateUrl: './right-left-chart-child.component.html',
  styleUrls: ['./right-left-chart-child.component.scss']
})
export class RightLeftChartChildComponent {
  @Input()
  hierarchyData!: any[];

}
