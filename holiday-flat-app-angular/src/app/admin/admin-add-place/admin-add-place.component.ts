import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-add-place',
  templateUrl: './admin-add-place.component.html',
  styleUrls: ['./admin-add-place.component.css']
})
export class AdminAddPlaceComponent implements OnInit {

  place = {
    name: '',
    description: '',
    accessabilityDescription: '',
    imageUrl: '',
    duration: '',
    adress: '',
    link: '',
    interests: [],
    disabilities: []
  }

  interests = []
  disabilities = []
  submitted = false;

  constructor(
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.adminService.getInterests().subscribe(
      data => {
        this.interests = data
      },
      err => {
        console.log(err)
      }
    )

    this.adminService.getDisabilities().subscribe(
      data => {
        this.disabilities = data
      },
      err => {
        console.log(err)
      }
    )
  }

  savePlace() {
    this.adminService.createPlace(this.place).subscribe(
      response => {
        console.log(response)
      },
      err => {
        console.log(err)
      }
    )
    this.router.navigate(['admin-places']).then(() => {
      window.location.reload();
    });
  }

  interestsCheckboxClicked(id) {
    if (this.place.interests.filter(function(i) { return i.id === id; }).length > 0) {
      this.place.interests = this.place.interests.filter(function(e) { return e.id !== id })
    } else {
      this.place.interests.push({id: id})
    }
  }

  disabilitiesCheckboxClicked(id) {
    if (this.place.disabilities.filter(function(d) { return d.id === id; }).length > 0) {
      this.place.disabilities = this.place.disabilities.filter(function(e) { return e.id !== id })
    } else {
      this.place.disabilities.push({id: id})
    }
  }

}
