import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-visitor-plan',
  templateUrl: './visitor-plan.component.html',
  styleUrls: ['./visitor-plan.component.css']
})

export class VisitorPlanComponent implements OnInit {

  d = new Date()
  date = this.d.getDate() + '/' + this.d.getMonth() + '/' + this.d.getFullYear() 
  submitted = false

  comment = {
    content: '',
    datePosted: this.date,

  }

  showAddComment = false
  isLoggedIn = false
  private roles: string[]

  places: any[];
  username: String

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.username = this.tokenStorageService.getUser().username;

    this.userService.getRecomendedPlaces().subscribe(
      data => {
        this.places = data;
      },
      err => {
        console.log(err)
      }
    );

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAddComment = this.roles.includes('ROLE_USER');
    }
    
  }

  saveComment(placeId) {
    this.submitted = true
    this.userService.createComment(placeId, this.comment).subscribe(
      response => {
        console.log(response)
      },
      err => {
        console.log(err)
      }
    )
    location.reload()
  }
  
}
