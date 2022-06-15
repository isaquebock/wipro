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

  constructor(private personsService: PersonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let dates: any[] = [];

    this.sub = this.route.data.subscribe(
      res => this.ages = res['ages'],
    )
    this.ages = this.ages.map((person: any) => person.birthday)
    this.ages.forEach((bday: any) => {
      let date = Date.parse(bday)
      let currentYear = new Date().getFullYear();
      let bdayYear = new Date(date).getFullYear()

      dates.push(currentYear - bdayYear)
    })

    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: dates,
          datasets: [{
              label: 'Idade',
              data: dates,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)'
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
