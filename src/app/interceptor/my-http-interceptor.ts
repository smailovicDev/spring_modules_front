import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

// in this interceptor we can add all required headers in 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
       const clone = request.clone({
            setHeaders: {
              'Accept': `application/json`,
              'Content-Type': `application/json`,
              // we already set the token in the app.module.ts in import section.
              // if we want to set it her we can remove the setter from the app module 
 //             Authorization: `Bearer ${token}`
            }
          });

          return next.handle(clone);

    }


    
}
