import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PersonsService } from 'src/app/services/persons.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {

  public sub: Subscription = new Subscription()
  public genders: any;

  constructor(private personsService: PersonsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let male = 0, female = 0;

    this.sub = this.route.data.subscribe(
      res => this.genders = res['gender'],
    )

    this.genders = this.genders.map((person: any) => person.gender),
    this.genders.forEach((gender: any) => {
      gender == 'male' ? male++ : female ++;
    })

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Mulheres', 'Homens'],
          datasets: [{
              label: 'Quantidade',
              data: [male, female],
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

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
