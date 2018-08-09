import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes, Router} from '@angular/router'

const appRoutes: Routes= [
{path:'education',component:EducationComponent},
{path:'hobbies',component:HobbiesComponent},
{path:'miscellaneous',component:MiscellaneousComponent},
{path:'skills',component:SkillsComponent},
{path:'profile',component:ProfileComponent},
{path:'',redirectTo:'/profile',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    SkillsComponent,
    HobbiesComponent,
    MiscellaneousComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
