import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Routes
import { AppRoutingModule } from "./app-routing.module";
import { APPROUTINGMODULE } from "./app.routes";

//components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
//Services
import { HeroesService } from "./services/heroes.services";
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, APPROUTINGMODULE],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
