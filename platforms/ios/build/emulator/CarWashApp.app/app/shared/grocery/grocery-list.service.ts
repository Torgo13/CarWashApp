import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery";

/* This is a simple service that reads grocery lists from the backend.
The Http service’s get() method is used to load JSON data,
and RxJS’s map() function is used to format the data into an array of Grocery objects. */

@Injectable()
export class GroceryListService {
  constructor(private http: Http) {}

  load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this.http.get(Config.apiUrl + "Groceries", {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let groceryList = [];
      data.Result.forEach((grocery) => {
        groceryList.push(new Grocery(grocery.Id, grocery.Name));
      });
      return groceryList;
    })
    .catch(this.handleErrors);
  }

  /* The Http service’s post() method is being used to make an HTTP call to the backend,
  and then using RxJS’s map() function to convert the returned data into a Grocery object.
  This object is consumed in the ListComponent’s add() method,
  which adds the grocery to the page’s list by calling this.groceryList.unshift(),
  and then empties that page’s text field by setting this.grocery equal to "". */
  add(name: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "Groceries",
      JSON.stringify({ Name: name }),
      { headers: headers }
    )
    .map(res => res.json())
    .map(data => {
      return new Grocery(data.Result.Id, name);
    })
    .catch(this.handleErrors);
  }

  delete(id: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);
    headers.append("Content-Type", "application/json");

    return this.http.delete(
      Config.apiUrl + "Groceries/" + id,
      { headers: headers }
    )
    .map(res => res.json())
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
