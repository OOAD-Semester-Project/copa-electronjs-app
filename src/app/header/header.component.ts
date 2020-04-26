import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private logoutUrl: string = "#";
  private headerText: string = "Copy Once Paste Anywhere";

  constructor(private httpService: HttpService,
    protected keycloakAngular: KeycloakService) { }

  ngOnInit(): void {
    let accessToken = this.keycloakAngular.getKeycloakInstance().token;
    console.log(this.keycloakAngular.getKeycloakInstance());
  }

  public logout(): void {
    this.keycloakAngular.getKeycloakInstance().logout();
  }

  public get getHeaderText(): string {
    return this.headerText;
  }

}
