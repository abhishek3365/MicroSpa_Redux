import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducers';
import * as ShoppingListActions from './shopping-list/store/shopping-list.actions';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loadedFeature = 'recipe';
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor( private store: Store<fromApp.AppState> ){
    
    var shoppingList = localStorage.getItem( 'shoppingList' );
    if( shoppingList )
      store.dispatch( new ShoppingListActions.SetIngredients( JSON.parse( shoppingList ) ) );

    this.store.select('shoppingList').subscribe( ( result )=> {
      localStorage.setItem( 'shoppingList' , JSON.stringify(result.ingredients) );
    } );
  }

  ngOnInit(  ) {
    firebase.initializeApp({
      apiKey: "AIzaSyBrkKleAX_8jHpPmTchVBmDD7Hkj8TT1VE",
      authDomain: "ng-recipe-book-3adbb.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
