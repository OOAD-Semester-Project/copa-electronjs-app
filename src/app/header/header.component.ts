import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private logoutUrl: string = "#";
  private headerText: string = "Copy Once Paste Anywhere";

  constructor() { }

  ngOnInit(): void {
  }

  public logout(): void {
    console.log("Logged out");
  }

  public get getHeaderText(): string {
    return this.headerText;
  }

}
