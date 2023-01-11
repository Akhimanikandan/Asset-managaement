import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
// import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SoftwareComponent } from './software/software.component';
import { ConfirmopenComponent } from './confirmopen/confirmopen.component';
import { Confirm2Component } from './confirm2/confirm2.component';
import { RequestComponent } from './request/request.component';
import { OpenrequestlistComponent } from './openrequestlist/openrequestlist.component';
import { ReleaserequestlistComponent } from './releaserequestlist/releaserequestlist.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ReleaseconfirmComponent } from './releaseconfirm/releaseconfirm.component';
import { CancellistComponent } from './cancellist/cancellist.component';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    // ContentComponent,
    LoginComponent,
    HomeComponent,
    SoftwareComponent,
    ConfirmopenComponent,
    Confirm2Component,
    RequestComponent,
    OpenrequestlistComponent,
    ReleaserequestlistComponent,
    CancellationComponent,
    ReleaseconfirmComponent,
    CancellistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    

   
  
    

    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
