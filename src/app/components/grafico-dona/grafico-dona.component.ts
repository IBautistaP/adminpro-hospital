import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from '../../../../node_modules/ng2-charts';
import { ChartType } from '../../../../node_modules/@types/chart.js';
@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: MultiDataSet = [];
  // @Input() public doughnutChartType: ChartType = '';
  @Input() public doughnutChartType: string = '';

  //  @Input() public doughnutChartLabels: Label[] = [
  //     'Download Sales',
  //     'In-Store Sales',
  //     'Mail-Order Sales'
  //   ];
  //   @Input()  public doughnutChartData: MultiDataSet = [
  //     [350, 450, 100],
  //     [50, 150, 120],
  //     [250, 130, 70]
  //   ];
  //   @Input()  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
