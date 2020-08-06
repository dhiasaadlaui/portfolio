import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'github', loadChildren: () => import('./sections/github/github.module').then(m => m.GithubModule) },
  { path: 'resume', loadChildren: () => import('./sections/resume/resume.module').then(m => m.ResumeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
