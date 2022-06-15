import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { GenderChartComponent } from 'src/app/components/chart/gender-chart/gender-chart.component';
import { HomeComponent } from './home.component';

// Resolvers
import { GenderChartResolver } from 'src/app/components/chart/guards/gender-chart.resolver';
import { AgeChartComponent } from 'src/app/components/chart/age-chart/age-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'gender', component: GenderChartComponent, resolve: { gender: GenderChartResolver} },
      { path: 'age', component: AgeChartComponent, resolve: { ages: GenderChartResolver} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
