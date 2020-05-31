import { Component, OnInit} from "@angular/core";
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  ngOnInit(){
  }
  title = "Bonjour !";
  isAdmin: boolean = false;
  showGuests: boolean = false; 
  showFriends: boolean = false; 
  isThisGuestImportant: boolean=true;
  showFavoriteMovies: boolean = true; 
  showHorrorMovies: boolean = true; 

  //Fonction appelée lors du clic
  btnShowFavoriteMovies_OnClick(){
    this.showFavoriteMovies= !this.showFavoriteMovies;
  }

  //Fonction appelée lors du clic
  btnShowHorrorMovies_OnClick(){
    this.showHorrorMovies= !this.showHorrorMovies;
  }

  btnShowGuests_OnClick(){
    this.showGuests= !this.showGuests;
  }

  btnShowFriends_OnClick(){
    this.showFriends= !this.showFriends;
  }
   
}
