import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenderChartComponent } from './gender-chart/gender-chart.component';
import { AgeChartComponent } from './age-chart/age-chart.component';
import { PersonsService } from 'src/app/services/persons.service';

@NgModule({
  declarations: [
    GenderChartComponent,
    AgeChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    PersonsService
  ]
})
export class ChartModule { }
