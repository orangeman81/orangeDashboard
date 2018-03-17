import { Injectable } from '@angular/core';
import { Api } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModaeService {

  constructor(private api: Api) { }

  add(service: string, portfolioForm: object): void {
    this.api
      .service(service)
      .create(portfolioForm);
  }

  update(service: string, portfolioForm: object, id: string): void {
    this.api
      .service(service)
      .patch(id, portfolioForm);
  }

  delete(service: string, id): void {
    this.api
      .service(service)
      .remove(id);
  }

  getList$(service: string): Observable<any[]> {
    return this.api
      .service(service)
      .watch()
      .find({
        query: {
          $sort: { createdAt: -1 },
          $limit: 25
        }
      })
      .map(d => d.data);
  }

  getDetails$(service: string, id): Observable<any> {
    return this.api
      .service(service)
      .watch()
      .find({
        query: {
          _id: id
        }
      })
      .map(d => d.data[0]);
  }
}
