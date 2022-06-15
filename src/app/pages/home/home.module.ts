import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChartComponent } from 'src/app/components/chart/chart.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { GenderChartResolver } from 'src/app/components/chart/guards/gender-chart.resolver';
import { PersonsService } from 'src/app/services/persons.service';

@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    GenderChartResolver,
    PersonsService
  ],

})
export class HomeModule { }
