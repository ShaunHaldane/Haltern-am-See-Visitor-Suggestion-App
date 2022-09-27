import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './public-content/register/register.component';
import { LoginComponent } from './public-content/login/login.component';
import { HomeComponent } from './public-content/home/home.component';
import { ProfileComponent } from './users/profile/profile.component';
import { VisitorPlanComponent } from './users/visitor-plan/visitor-plan.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminPlacesComponent } from './admin/admin-places/admin-places.component';
import { AdminInterestsAndDisabilitiesComponent } from './admin/admin-interests-and-disabilities/admin-interests-and-disabilities.component';
import { AdminAddPlaceComponent } from './admin/admin-add-place/admin-add-place.component';
import { AdminEditPlaceComponent } from './admin/admin-edit-place/admin-edit-place.component';
import { AddVisitorComponent } from './users/add-visitor/add-visitor.component';
import { DirectoryComponent } from './public-content/directory/directory.component';
import { PrivacyPolicyComponent } from './public-content/privacy-policy/privacy-policy.component';
import { ContactComponent } from './public-content/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'places', component: DirectoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: VisitorPlanComponent },
  { path: 'admin-users', component: AdminUsersComponent },
  { path: 'admin-places', component: AdminPlacesComponent },
  { path: 'admin-places/:id', component: AdminEditPlaceComponent },
  { path: 'admin-add-place', component: AdminAddPlaceComponent },
  { path: 'add-visitor', component: AddVisitorComponent },
  { path: 'visitor-suggestions', component: VisitorPlanComponent },
  { path: 'admin-interests-and-disabilities', component: AdminInterestsAndDisabilitiesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
