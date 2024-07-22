import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Make a PUT request to the server
   * @param endpoint
   * @param payload
   */
  put<T>(endpoint: string, payload: any): Observable<T> {
    return this.httpClient.put<T>('http://localhost:8080' + endpoint, payload);
  }

  /**
   * Make a DELETE request to the server
   * @param endpoint
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>('http://localhost:8080' + endpoint);
  }

  /**
   * Make a GET request to the server
   * @param endpoint
   */
  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>('http://localhost:8080' + endpoint);
  }

  /**
   * Make a POST request to the server
   * @param endpoint
   * @param payload
   */
  post<T>(endpoint: string, payload: any): Observable<T> {
    return this.httpClient.post<T>('http://localhost:8080' + endpoint, payload);
  }

}
