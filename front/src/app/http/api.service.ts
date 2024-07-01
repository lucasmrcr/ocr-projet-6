import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  put<T>(endpoint: string, payload: any) {
    return this.httpClient.put<T>('http://localhost:8080' + endpoint, payload);
  }

  delete<T>(endpoint: string) {
    return this.httpClient.delete<T>('http://localhost:8080' + endpoint);
  }

  get<T>(endpoint: string) {
    return this.httpClient.get<T>('http://localhost:8080' + endpoint);
  }

  post<T>(endpoint: string, payload: any) {
    return this.httpClient.post<T>('http://localhost:8080' + endpoint, payload);
  }

}
