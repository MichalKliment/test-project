import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from '@buhler/machines/utils';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MachineDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Machine[]> {
    return this.http.get<Machine[]>('/assets/machines.json');
  }
}
