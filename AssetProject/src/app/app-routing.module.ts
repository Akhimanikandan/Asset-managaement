import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CancellationComponent } from './cancellation/cancellation.component';
import { CancellistComponent } from './cancellist/cancellist.component';
import { Confirm2Component } from './confirm2/confirm2.component';
import { ConfirmopenComponent } from './confirmopen/confirmopen.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OpenrequestlistComponent } from './openrequestlist/openrequestlist.component';
import { ReleaseconfirmComponent } from './releaseconfirm/releaseconfirm.component';
import { ReleaserequestlistComponent } from './releaserequestlist/releaserequestlist.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  // {
  //   path:'software',
  //   component:SoftwareComponent
  // },
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'software',
        component: SoftwareComponent,
      },
      {
        path: 'openrequestlist',
        component: OpenrequestlistComponent
      },
      {
        path: 'releaserequestlist',
        component: ReleaserequestlistComponent
      },
      
    ]

  },
  {
    path: 'confirmopen/:id',
    component: ConfirmopenComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'confirm2/:reqId',
    component: Confirm2Component,
    canActivate:[AuthGuard]
  }, 
  
  {
    path: 'cancellation/:reqId',
    component: CancellationComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'releaseconfirm/:reqId',
    component: ReleaseconfirmComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'cancellist/:reqId',
    component:CancellistComponent,
    canActivate:[AuthGuard]
  },
  



]



// {
//   path: 'confirmopen',
//   component: ConfirmopenComponent
// }




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
