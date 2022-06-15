import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonsService {

  private quantity: number = 20;
  private readonly API_URL: string = `${environment.API}`
  //trocar api https://dummyjson.com/users

  constructor(private httpClient: HttpClient) {}

  get getPersons(): any {
    return this.httpClient.get<any>(this.API_URL).pipe(map(res => res.users))
  }

}
