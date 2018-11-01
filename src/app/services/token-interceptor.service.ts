import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get("No-Auth") == "True") {
      return next.handle(req.clone());
    }
    if (localStorage.getItem("access_token") == null) {
      this.router.navigateByUrl("/login");
    }
    const clonedreq = req.clone({
      headers: req.headers
        .set("Accept", "application/json")
        .set("Content-Type", "application/x-www-form-urlencoded")
        .set("Authorization", "Bearer " + localStorage.getItem("access_token"))
    });
    return next.handle(clonedreq);
  }
  constructor(private router: Router) {}
}
