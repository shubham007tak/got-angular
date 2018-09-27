import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardHttpService } from '../card-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {

  public allItems;
  public houseData;
  constructor(private _route: ActivatedRoute, private router: Router, public CardHttpService: CardHttpService, private location: Location) { }

  ngOnInit() {
    console.log("card-view onInit called");
    let myCharId = this._route.snapshot.paramMap.get('charId');
    console.log(myCharId);
    // this.currentCard=this.CardHttpService.getSingleCharacterinformation(myCharId);
    // console.log(this.currentCard);

    this.allItems = this.CardHttpService.getSingleCharacterinformation(myCharId).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.houseData = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )


  }
  goBack(): any {
    this.location.back();

  }
}


