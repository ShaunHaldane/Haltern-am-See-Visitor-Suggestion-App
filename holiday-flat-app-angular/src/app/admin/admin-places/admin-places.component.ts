import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-places',
  templateUrl: './admin-places.component.html',
  styleUrls: ['./admin-places.component.css']
})
export class AdminPlacesComponent implements OnInit {

  places: any[]

  constructor(
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {

    this.adminService.getPlaces().subscribe(
      data => {
        this.places = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deletePlace(id: Number): void {
    this.adminService.deletePlace(id).subscribe(
      response => {
        location.reload(); 
      },
      err => {
        console.log(err)
      }
    )
  }

}

