import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private httpClient : HttpClient) {} 

    // for GitHub profile

    public getProfile(searchQuery:string):Observable<any>{

      let dataURL = `https://api.github.com/users/${searchQuery}?client_id=Iv1.41c0283bc1fdf804&client_secret=40edf633f9605190ebd54648d0c9b91863174434`;
      
      return this.httpClient.get<any>(dataURL).pipe(

        retry(1),
        catchError(this.handleErrors)
      );
    }

    // for GitHub repos

    public getRepos(searchQuery:string):Observable<any[]>{

      let dataURL = `https://api.github.com/users/${searchQuery}/repos?client_id=Iv1.41c0283bc1fdf804&client_secret=40edf633f9605190ebd54648d0c9b91863174434`;
      
      return this.httpClient.get<any[]>(dataURL).pipe(

        retry(1),
        catchError(this.handleErrors)
      );
    }


    public handleErrors(error:HttpErrorResponse){

      let errorMessage:string;

      if(error.error instanceof ErrorEvent){

        //client side error
        errorMessage = `MESSAGE : ${error.error.message}`;

      } else {

        // server side error

        errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}` ;

      }
      return throwError(errorMessage);

    }
  }

