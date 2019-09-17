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
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' }
  ];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
   getProduct() {
    this._productService.getProducts().subscribe(
      (product: any) => {
        
        var array = product;
        array.sort(function (a, b) {
          return b.views - a.views;
        });
       for(let p in array)
   {
     console.log(typeof(this.barChartLabels));
    this.barChartLabels.push(array[p].productName);
    this.barChartData[0].data.push(array[p].views);
    
   }
   console.log(  this.barChartLabels,":::::::::",this.barChartData)

 
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

  public randomize(): void {
    // Only Change 3 values
    const data =this.barChartData[0].data.splice(0,3);
    this.barChartData[0].data = data;
  }
}
