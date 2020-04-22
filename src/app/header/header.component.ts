import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private logoutUrl: string = "#";
  private headerText: string = "Copy Once Paste Anywhere";

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.httpService.logout().subscribe(url=> {
      window.location.href = url;
     });
    console.log("Logged out");
  }

  public get getHeaderText(): string {
    return this.headerText;
  }

}
