import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

@Injectable({
  providedIn: 'root'
})
export class GenderChartResolver implements Resolve<any> {

  constructor(private personsService: PersonsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    return this.personsService.getPersons.pipe(map(res => res))
  }
}
