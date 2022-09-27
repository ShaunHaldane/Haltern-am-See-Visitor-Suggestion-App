import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  visitor = {
    name: '',
    age: 0,
    interests: [],
    disabilities: []
  }

  interests = []
  disabilities = []
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.userService.getInterests().subscribe(
      data => {
        this.interests = data
      },
      err => {
        console.log(err)
      }
    )

    this.userService.getDisabilities().subscribe(
      data => {
        this.disabilities = data
      },
      err => {
        console.log(err)
      }
    )
  }

  saveVisitor() {
    this.userService.createVisitor(this.visitor).subscribe(
      response => {
        console.log(response)
      },
      err => {
        console.log(err)
      }
    )
    this.router.navigate(['profile']).then(() => {
      window.location.reload();
    });
  }

  interestsCheckboxClicked(id) {
    if (this.visitor.interests.filter(function(i) { return i.id === id; }).length > 0) {
      this.visitor.interests = this.visitor.interests.filter(function(e) { return e.id !== id })
    } else {
      this.visitor.interests.push({id: id})
    }
  }

  disabilitiesCheckboxClicked(id) {
    if (this.visitor.disabilities.filter(function(d) { return d.id === id; }).length > 0) {
      this.visitor.disabilities = this.visitor.disabilities.filter(function(e) { return e.id !== id })
    } else {
      this.visitor.disabilities.push({id: id})
    }
  }

}

