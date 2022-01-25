import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart-component.html'
})
export class LineChartComponent {
  @Input() public dataset!: any[];
  @Input() public keys!: string[];
  @Input() public xAxisKey!: string;
}
