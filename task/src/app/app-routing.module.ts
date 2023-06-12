import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';
import { RecordComponentComponent } from './record-component/record-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path:'home', component:HomeComponent
},
{
  path: 'list', component: ListComponentComponent
}, {
  path: 'record', component: RecordComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
