import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [GithubComponent, RepositoriesComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class GithubModule { }