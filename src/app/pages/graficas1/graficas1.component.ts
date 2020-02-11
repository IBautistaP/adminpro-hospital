import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from '../../../../node_modules/ng2-charts';
import { ChartType } from '../../../../node_modules/@types/chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  // https://valor-software.com/ng2-charts/
  //  npm install ng2-charts@2.2.3 --save
  // npm install chart.js --save

  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
