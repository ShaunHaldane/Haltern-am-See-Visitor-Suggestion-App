import { Component, OnInit } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

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

  places: any[]
  disabilities: any[]
  selectedDisability: String = 'All Places'

  constructor(
    private tokenStorageService: TokenStorageService,
    private publicService: PublicService,
    private userService: UserService) { }

  ngOnInit(): void {

    this.publicService.getDisabilities().subscribe(
      data => {
        this.disabilities = data;
      },
      err => {
        console.log(err);
      }
    )

    this.publicService.getPublicContent().subscribe(
      data => {
        this.places = data;
      },
      err => {
        console.log(err);
      }
    )

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAddComment = this.roles.includes('ROLE_USER');
    }

  }

  getPlacesByDisability(id, name) {
    this.publicService.getPlacesByDisabilityId(id).subscribe(
      data => {
        this.places = data;
        this.selectedDisability = "Places Suitable for " + name
      },
      err => {
        console.log(err);
      }
    )
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

  reset() {
    window.location.reload()
  }

}
