import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DocsComponent } from './docs/docs.component';
import { EventsComponent } from './events/events.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'home', component: HomeComponent},
  {path:'features', component: FeaturesComponent},
  {path:'docs', component: DocsComponent},
  {path:'events', component: EventsComponent},
  {path:'blog', component: BlogComponent},
  {path:'resources', component: ResourcesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
