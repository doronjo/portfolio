import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home' , pathMatch:'full'},
  { path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes , {useHash:true})  
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
