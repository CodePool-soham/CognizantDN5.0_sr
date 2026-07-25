import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {


  return next(req).pipe(

    catchError(error => {


      if (error.status === 401) {

        console.log(
          "Unauthorized - Redirect to Login"
        );

      }


      else if (error.status === 500) {

        console.log(
          "Server Error - Try Again Later"
        );

      }


      return throwError(() => error);


    })

  );


};