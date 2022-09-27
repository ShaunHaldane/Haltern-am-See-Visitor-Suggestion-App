import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public-content/login/login.component';
import { RegisterComponent } from './public-content/register/register.component';
import { HomeComponent } from './public-content/home/home.component';
import { ProfileComponent } from './users/profile/profile.component';
import { VisitorPlanComponent } from './users/visitor-plan/visitor-plan.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AdminPlacesComponent } from './admin/admin-places/admin-places.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminInterestsAndDisabilitiesComponent } from './admin/admin-interests-and-disabilities/admin-interests-and-disabilities.component';
import { AdminAddPlaceComponent } from './admin/admin-add-place/admin-add-place.component';
import { AdminEditPlaceComponent } from './admin/admin-edit-place/admin-edit-place.component';
import { AddVisitorComponent } from './users/add-visitor/add-visitor.component';
import { DirectoryComponent } from './public-content/directory/directory.component';
import { PrivacyPolicyComponent } from './public-content/privacy-policy/privacy-policy.component';
import { ContactComponent } from './public-content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    VisitorPlanComponent,
    AdminPlacesComponent,
    AdminUsersComponent,
    AdminInterestsAndDisabilitiesComponent,
    AdminAddPlaceComponent,
    AdminEditPlaceComponent,
    AddVisitorComponent,
    DirectoryComponent,
    PrivacyPolicyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
