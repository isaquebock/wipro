import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-age-chart',
  templateUrl: './age-chart.component.html',
  styleUrls: ['./age-chart.component.scss']
})
export class AgeChartComponent implements OnInit {

  public sub: Subscription = new Subscription()
  public ages: any;

  private youngerThan20: number = 0;
  private youngerThan40: number = 0;
  private youngerThan60: number = 0;
  private olderThan60: number = 0;

  constructor(private personsService: PersonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let dates: any[] = [];

    this.sub = this.route.data.subscribe(
      res => this.ages = res['ages'],
    )
    this.ages = this.ages.map((person: any) => person.age)
    this.ages.forEach((bday: number) => {
      if(bday < 20) {
        this.youngerThan20 = this.youngerThan20 + 1;
      } else if(bday < 40) {
        this.youngerThan40 = this.youngerThan40 + 1;
      } else if(bday < 60) {
        this.youngerThan60 = this.youngerThan60 + 1;
        console.log(bday, this.youngerThan60)
      } else {
        this.olderThan60 = this.olderThan60 + 1;
      }
    })

    const myChart = new Chart("pieChart", {
      type: 'pie',
      data: {
          labels: ['Mais novo que 20', 'Mais novo que 40', 'Mais novo que 60', 'Mais velho que 60'],
          datasets: [{
              label: 'Idade',
              data: [this.youngerThan20, this.youngerThan40, this.youngerThan60, this.olderThan60],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgb(60, 179, 113)',
                  'rgb(238, 130, 238)'

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgb(60, 179, 113)',
                  'rgb(238, 130, 238)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
  }

}
