import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  currentUser: any;
  visitors: any[]

  constructor(
    private token: TokenStorageService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.userService.getVisitors().subscribe(
      data => {
        this.visitors = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteVisitor(id: Number) {
    this.userService.deleteVisitor(id).subscribe(
      response => {
        location.reload(); 
      },
      err => {
        console.log(err)
      }
    )
  }
  
}
