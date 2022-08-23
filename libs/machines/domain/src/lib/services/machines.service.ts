import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../models';

@Injectable({ providedIn: 'root' })
export class MachineDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Machine[]> {
    return this.http.get<Machine[]>('/assets/machines.json');
  }
}
