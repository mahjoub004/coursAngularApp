import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  public starWidth: number | undefined;

  @Input() // pour changer des donnees avec l'element parent
  public rating: number= 2;
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5 ;
   }

}
