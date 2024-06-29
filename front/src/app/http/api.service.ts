import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  post<T>(endpoint: string, payload: any) {
    return this.httpClient.post<T>('http://localhost:8080' + endpoint, payload);
  }

}
