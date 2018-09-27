import { Component, OnInit,OnDestroy } from '@angular/core';
import { CardHttpService } from '../card-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allItems=[];
  public characterData=[];
  public bookData=[];
  public houseData=[];
  public allItems_unsort=[];
  

  constructor( public CardHttpService:CardHttpService) { }

  ngOnInit() {
    console.log("home component onInit called");
    // this.allItems=this.CardHttpService.getAllCards();
    // console.log(this.allItems);

    this.characterData=this.CardHttpService.getAllCharacters().subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.characterData=data;
        this.characterData.sort((a,b) => a.name.localeCompare(b.name));

        this.allItems=this.allItems.concat(this.characterData);
      },
      error=>{
        console.log("some error message");
        console.log(error.errorMessage);
      }
    );
    this.bookData=this.CardHttpService.getAllBooks().subscribe(
      data=>{
        console.log("logging data for books");
        console.log(data);
        this.bookData=data;
        this.bookData.sort((a,b) => a.name.localeCompare(b.name));
        this.allItems=this.allItems.concat(this.bookData);
        // this.allItems=this.allItems.concat(this.bookData);
        

      },
      error=>{
        console.log("some error message");
        console.log(error.errorMessage);
      }
    );
    this.houseData=this.CardHttpService.getAllHouses().subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.houseData=data;
        
        // this.houseData.sort((a,b) => a.name.localeCompare(b.name));
        this.allItems=this.allItems.concat(this.houseData);
        // this.allItems1=this.characterData.concat(this.houseData);
        // this.allItems=this.allItems1.concat(this.bookData);
      
        
        

        // this.allItems.sort((a,b) => a.name.localeCompare(b.name));
       
        console.log(this.allItems);

        
        
      },
      error=>{
        console.log("some error message");
        console.log(error.errorMessage);
      }
    );
   
    // this.allItems=Object.assign({},this.allItems1,this.allItems2,this.allItems3);
    // console.log(this.allItems);
    
    

  }

  

  ngOnDestroy() {
    console.log("home component ondestroy called")
  }
}
