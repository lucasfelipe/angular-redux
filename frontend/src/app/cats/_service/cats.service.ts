import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cat} from '../_model/cat';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class CatsService {

  private url = 'http://localhost:3000/cats';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Cat[]> {
    return this.http.get(this.url).pipe(
      map((res: any) => (res.success.cats as Cat[]))
    );
  }
}
