import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  goPage(inputTxt: string) {
    this._router.navigate(["/search-page", inputTxt]);
  }
}
