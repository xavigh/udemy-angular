import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.services";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html"
})
export class SearchPageComponent implements OnInit {
  heroes: any[] = [];
  inputTxt: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.inputTxt = params["inputTxt"];
      this.heroes = this._heroesService.searchHeroes(params["inputTxt"]);
      console.log(this.heroes);
    });
  }
}
