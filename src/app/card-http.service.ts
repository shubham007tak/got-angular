import { Injectable } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class CardHttpService {

  public baseUrl='https://anapioficeandfire.com/api/';
  public currentCharacter;
  public allItems ;
  public authToken='ZTU2N2UwMDJjZTI3YTdhZTVmMTY3OTY4OWE0ODZmYzU2ODVkNTQxYTVlNjJjZDI0MjBiYWY2OGI0ZDg5NDg1OGRkYmNmOGYyZTc0ODNhY2FhNDFmNGFkMDgzYTY1YzBhNDc1NWNkODJkNTMwZWNkMmMwYmU3ZjYxZjYyOTQwZGIxMA==';
  
  

  constructor(private _http:HttpClient) {
    console.log("card http service is called");
   }

   private handleError(err:HttpErrorResponse){
    console.log("handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
   

   public getAllCharacters():any{
     
     let myResponse3=this._http.get(this.baseUrl+'/characters?pageSize=200'+'&authToken='+this.authToken);
     console.log(myResponse3);
     return myResponse3;

   }
   public getAllBooks():any{
     
    let myResponse1=this._http.get(this.baseUrl+'/books?pageSize=200'+'&authToken='+this.authToken);
    console.log(myResponse1);
    return myResponse1;

  }
  public getAllHouses():any{
     
    let myResponse2=this._http.get(this.baseUrl+'/houses?pageSize=200'+'&authToken='+this.authToken);
    console.log(myResponse2);
    return myResponse2;

  }
  // public getAllItems():any{
  //   let myResponse3=this._http.get(this.baseUrl+'/characters?pageSize=200'+'&authToken='+this.authToken);
  //   let myResponse1=this._http.get(this.baseUrl+'/books?pageSize=200'+'&authToken='+this.authToken);
  //   let myResponse2=this._http.get(this.baseUrl+'/houses?pageSize=200'+'&authToken='+this.authToken);

    
  // }
  
   public getSingleCharacterinformation(myCharId):any{
    let myResponse4=this._http.get(myCharId+'?authToken='+this.authToken);
    return myResponse4;
    
  }
  
}
