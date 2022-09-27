import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showListUsers = false;
  showCategories = false;
  showPlaces = false;
  showAddPlace = false;
  addVisitor = false;
  visitorPlan = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showListUsers = this.roles.includes('ROLE_ADMIN');
      this.showCategories = this.roles.includes('ROLE_ADMIN');
      this.showPlaces = this.roles.includes('ROLE_ADMIN');
      this.showAddPlace = this.roles.includes('ROLE_ADMIN');
      this.showAddPlace = this.roles.includes('ROLE_ADMIN');

      this.addVisitor = this.roles.includes('ROLE_USER');
      this.visitorPlan = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }
  
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

