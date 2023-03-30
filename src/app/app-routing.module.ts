import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelDetailGuard } from './guard/hotel-detail-guard.guard';

const routes: Routes = [
  {path:'hotels/:id' , component: HotelDetailComponent,
    canActivate:[HotelDetailGuard]},
  {path:'hotels' , component: HotelListComponent},
  {path:'home' , component: HomeComponent},
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'**',redirectTo:'home' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
