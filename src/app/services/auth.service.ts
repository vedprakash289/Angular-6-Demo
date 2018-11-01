import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  getAccessToken(): any {
    return localStorage.getItem("access_token");
  }
  readonly host: string = "http://service.authentication.com:9000/";
  isLogged: boolean = false;
  token: string = "";
  token_type: string = "";
  UserName: string = "";

  constructor(private http: HttpClient) {}

  Register(FirstName, LastName, Mobile, Email, Password, ConfirmPassword) {
    let data =
      "FirstName=" +
      FirstName +
      "&LastName=" +
      LastName +
      "&Mobile=" +
      Mobile +
      "&Email=" +
      Email +
      "&Password=" +
      Password +
      "&ConfirmPassword=" +
      ConfirmPassword +
      "&Role=" +
      "Customer";
    let reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http
      .post(this.host + "api/Account/Register", data, { headers: reqHeader })
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  getToken(username, password) {
    let userData = new HttpParams()
      .set("username", username)
      .set("password", password)
      .set("grant_type", "password");

    let reqHeader = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "No-Auth": "True"
    });
    return this.http
      .post(this.host + "/token", userData, {
        headers: reqHeader
      })
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  UserInfo() {
    return this.http.get(this.host + "api/Account/UserInfo");
  }

  LogOut() {
    return this.http.post(this.host + "api/Account/Logout", {}).pipe(
      map((res: any) => res),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
