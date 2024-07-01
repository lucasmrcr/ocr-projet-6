import {HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return next(req);
  }

  const headers = new HttpHeaders({
    Authorization: 'Bearer ' + token,
  });

  const newReq = req.clone({
    headers,
  });

  return next(newReq).pipe(
    catchError((err) => {
      if (err.status === 401) {
        sessionStorage.removeItem('token');
        window.location.reload();
      }
      throw err;
    }),
  );
}
