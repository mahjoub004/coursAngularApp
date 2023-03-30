import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Ihotel } from 'src/app/interfaces/ihotel';

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  private readonly HOTEL_API_URL = "api/hotels.json" ;

  constructor(private http:HttpClient) { }

  public getHotels(): Observable<Ihotel[]>{

    return this.http.get<Ihotel[]>(this.HOTEL_API_URL).pipe(   // parametre generique "<Ihotel[]>"

      tap(hotels => console.log('hotels: ', hotels)), // afficher dans la console
      catchError(this.handlerError)                   // intercepter les erreurs
    );
  }

//method pour la gestion des erreurs
  private handlerError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
    }else{
      console.error(`Backend returned code ${error.status} ,`+`body was : ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened ; please try later.'))
  }

}
