import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ContactMeComponent } from './contact_page/contact-me/contact-me.component';
import { AboutComponent } from './about_page/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { AnimationState: 'home' },
  },
  {
    path: 'works',
    component: WorksComponent,
    data: { AnimationState: 'works' },
  },
  {
    path: 'contact',
    component: ContactMeComponent,
    data: { AnimationState: 'contact' },
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
