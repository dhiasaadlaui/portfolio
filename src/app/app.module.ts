import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    SkillsComponent,
    HobbiesComponent,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
