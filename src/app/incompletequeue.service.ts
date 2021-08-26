import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncompleteQueue } from './incompletequeue';

@Injectable({
  providedIn: 'root'
})
export class IncompletequeueService {

  constructor(private http: HttpClient) { }

  public getIncompleteQueue(): Observable<IncompleteQueue[]> {
    return this.http.get<IncompleteQueue[]>(`http://localhost:8080/api/queue/incomplete`);
  }
}
