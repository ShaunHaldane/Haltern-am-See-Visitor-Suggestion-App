import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-interests-and-disabilities',
  templateUrl: './admin-interests-and-disabilities.component.html',
  styleUrls: ['./admin-interests-and-disabilities.component.css']
})
export class AdminInterestsAndDisabilitiesComponent implements OnInit {

  interests: any[]
  disabilities: any[]
  interestName: String = ''
  disabilityName: String = ''

  constructor(private adminService: AdminService) { }

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

  deleteInterest(id: Number): void {
    this.adminService.deleteInterest(id).subscribe(
      response => {
        location.reload()
      },
      err => {
        console.log(err)
      }
    )
  }

  createInterest(interestName: String): void {
    this.interestName = interestName
    this.adminService.createInterest({name: this.interestName}).subscribe(
      response => {
        location.reload()
      },
      err => {
        console.log(err)
      }
    )
  }

  deleteDisability(id: Number): void {
    this.adminService.deleteDisability(id).subscribe(
      response => {
        location.reload()
      },
      err => {
        console.log(err)
      }
    )
  }

  createDisability(disabilityName: String): void {
    this.disabilityName = disabilityName
    this.adminService.createDisability({name: this.disabilityName}).subscribe(
      response => {
        location.reload()
      },
      err => {
        console.log(err)
      }
    )
  }
  
}

