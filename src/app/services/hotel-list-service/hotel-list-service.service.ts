import { Injectable } from '@angular/core';
import { Ihotel } from 'src/app/interfaces/ihotel';

@Injectable({
  providedIn: 'root'
})
export class HotelListServiceService {

  public gestHotels():Ihotel[]{
    return [
      {
            "hotelId": 1,
            "hotelName": "Buea sweet life",
            "description": "Belle vue au bord de la mer",
            "price": 230.5,
            "imageUrl": "assets/img/hotel1.jpg",
            "rating": 3.5
      },
      {
            "hotelId": 2,
            "hotelName": "Marakech",
            "description": "Profitez de la vue sur les montagnes",
            "price": 145.5,
            "imageUrl": "assets/img/hotel2.jpg",
            "rating": 5
      },
      {
            "hotelId": 3,
            "hotelName": "Abudja new look palace",
            "description": "Séjour complet avec service de voitures",
            "price": 120.12,
            "imageUrl": "assets/img/hotel3.jpg",
            "rating": 4
      },
      {
            "hotelId": 4,
            "hotelName": "Cape town city",
            "description": "Magnifique cadre pour votre séjour",
            "price": 135.12,
            "imageUrl": "assets/img/hotel4.jpg",
            "rating": 2.5
      }
      ,
      {
            "hotelId": 4,
            "hotelName": "Cape town city",
            "description": "Magnifique cadre pour votre séjour",
            "price": 135.12,
            "imageUrl": "assets/img/hotel4.jpg",
            "rating": 2.5
      }
    ]
  }

  constructor() { }
}
