import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public persons: any[] = []
  public dates: any[] = [];
  public sub: Subscription = new Subscription()

  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.sub = this.personsService.getPersons.subscribe(
      (res: any) => {this.persons = res},
      (error: any) => {console.log(error)},
    )
  }

}
