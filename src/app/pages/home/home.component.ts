import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public persons: any[] = []
  @Output() personsCreated: EventEmitter<any> = new EventEmitter;

  constructor(private personsService: PersonsService) { }

  ngOnInit(): void {
    this.personsService.getPersons.subscribe((res: any) => this.persons = res)
    this.personsCreated.emit('test')
  }

}
