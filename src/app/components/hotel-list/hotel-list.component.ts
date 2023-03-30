import { Component, OnInit } from '@angular/core';
import { Ihotel } from 'src/app/interfaces/ihotel';
import { HotelListService } from 'src/app/services/hotel-list-service/hotel-list-service.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

    constructor(private hotelsService: HotelListService) { }

  hotels: Ihotel[] = [];

  public showBadge: boolean =false;

  private _hotelFilter = 'mot';

  public filteredHotels: Ihotel[] = [];

  public receivedRating: string| undefined;

  public errMsg : string | undefined;



  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe({
        next: hotels => {       // next() : recevoir a chaque fois l'objet qu'etais transmis par l'observable
             this.hotels = hotels,
             this.filteredHotels = this.hotels
        },

        error: err => this.errMsg = err
    });

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

 public receiveRatingClicked(message: string){
    this.receivedRating = message;
  }

}
