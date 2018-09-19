import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WellcomeComponent } from './home/wellcome/wellcome.component';

const routes: Routes = [
  { path : 'home', component: WellcomeComponent },
  {path : '' , redirectTo: '/home',pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})


export class AppRoutingModule { }
