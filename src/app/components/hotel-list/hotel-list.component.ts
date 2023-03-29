import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/app/interfaces/ihotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Ihotel[] = [
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
  public showBadge: boolean =false;

  private _hotelFilter = 'mot';

  public filteredHotels: Ihotel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredHotels = this.hotels
    this.hotelFilter = ""
  }
   /**
     * toggleIsNewBadge
 : void    */
 public toggleIsNewBadge(): void {
  this.showBadge = !this.showBadge
}

public get hotelFilter() : string {
   return this._hotelFilter;
}

public set hotelFilter(filter : string) {
  this._hotelFilter = filter;
  this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels ;
}



private filterHotels(criteria: string): Ihotel[]{
  criteria = criteria.toLocaleLowerCase();
  const res = this.hotels.filter(
   ( hotel: Ihotel ) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1 );
  return res;
  }


}
