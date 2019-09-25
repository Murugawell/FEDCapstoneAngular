import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        barPercentage: 0.4
      }],
      yAxes: [{
        ticks: { min: 0, stepSize: 5, display: true, beginAtZero: true }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  pieChartType = 'pie';
  pieChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  product = [];
  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Views' }
  ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#b7bfe8',

    }];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this._productService.getProducts().subscribe(
      (product: any) => {
        this.product = product;
        const array = product;
        array.sort(function (a, b) {
          return b.views - a.views;
        });
        for (const p in array) {
          console.log(typeof (this.barChartLabels));
          this.barChartLabels.push(array[p].productName);
          this.barChartData[0].data.push(array[p].views);

        }
        console.log(this.barChartLabels, ':::::::::', this.barChartData);


      },
      err => console.log(err)
    );

  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(event, num): void {
    // Only Change 3 values
    console.log(num);
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    for (const p in this.product) {
      console.log(typeof (this.barChartLabels));
      this.barChartLabels.push(this.product[p].productName);
      this.barChartData[0].data.push(this.product[p].views);

    }
    if (num > 0) {
      const data = this.barChartData[0].data.splice(0, num);

      const labels = this.barChartLabels.splice(0, num);
      this.barChartData[0].data = data;
      this.barChartLabels = labels;
    }
  }
}
