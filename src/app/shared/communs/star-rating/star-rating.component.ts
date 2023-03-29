import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  public starWidth: number | undefined;

  @Input() // pour changer des donnees avec l'element parent
  public rating: number= 2;

  //la laison avec l'element parent
  @Output()
  public starRatingClicked:
  EventEmitter<string> = new EventEmitter<string>();



  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5 ;
   }

  public sendRating(): void{
    this.starRatingClicked
    .emit(`la note est de ${this.rating}`)
  }
}
