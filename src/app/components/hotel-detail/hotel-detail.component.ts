import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ihotel } from 'src/app/interfaces/ihotel';
import { HotelListService } from 'src/app/services/hotel-list-service/hotel-list-service.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: Ihotel | undefined = <Ihotel>{}  ;

  constructor(private route : ActivatedRoute,
              private hotelService: HotelListService) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    // '+' pour parser le string a un nombre
    // '!' Object is possibly 'null'


    this.hotelService.getHotels().subscribe((hotels:Ihotel[]) =>{

      this.hotel = hotels.find(hotel => hotel.hotelId === id);
        console.log('hotel ' + JSON.stringify(this.hotel ));
    })

  }

}
