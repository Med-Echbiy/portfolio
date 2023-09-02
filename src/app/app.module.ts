import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  radixAvatar,
  radixDownload,
  radixGithubLogo,
  radixInstagramLogo,
  radixLinkedinLogo,
  radixPlay,
} from '@ng-icons/radix-icons';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './works/work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactMeComponent } from './contact_page/contact-me/contact-me.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about_page/about/about.component';
import { tablerChessQueen, tablerSoccerField } from '@ng-icons/tabler-icons';
import {
  simpleAngular,
  simpleCss3,
  simpleExpress,
  simpleGmail,
  simpleHtml5,
  simpleJavascript,
  simpleNextdotjs,
  simpleNodedotjs,
  simpleReact,
  simpleSolid,
  simpleSvelte,
  simpleTailwindcss,
  simpleVuedotjs,
} from '@ng-icons/simple-icons';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WorksComponent,
    WorkComponent,
    ContactMeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({
      radixDownload,
      radixGithubLogo,
      radixPlay,
      radixLinkedinLogo,
      radixInstagramLogo,
      tablerChessQueen,
      tablerSoccerField,
      simpleGmail,
      radixAvatar,
      simpleReact,
      simpleAngular,
      simpleNextdotjs,
      simpleTailwindcss,
      simpleNodedotjs,
      simpleExpress,
      simpleVuedotjs,
      simpleSolid,
      simpleSvelte,
      simpleJavascript,
      simpleHtml5,
      simpleCss3,
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
