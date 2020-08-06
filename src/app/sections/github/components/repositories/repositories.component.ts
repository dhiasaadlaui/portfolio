import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repositories: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.initializeRepositories();
  }

  initializeRepositories(): void {
    this.githubService.getRepositories().subscribe(
      (data) => {
        this.repositories = data;
      },
      (err) => {}
    );
  }
}
