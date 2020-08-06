import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repositories: any[] = [];
  displayedRepositories: any[] = [];
  filter = '';
  isLoading = false;

  // MatPaginator Inputs
  length = 0;
  pageSize = 2;
  pageSizeOptions: number[] = [ 2, 3, 4, 5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.initializeRepositories();
  }

  onFilterChange() {
    this.isLoading = true;
    this.githubService.getRepositories().subscribe(
      (data) => {
        this.repositories = data.filter((element) =>
          element.name.toLowerCase().includes(this.filter.toLowerCase())
        );
        this.displayedRepositories = this.repositories.slice(0, this.pageSize);
        this.length = this.repositories.length;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  onPageChange($event) {
    this.displayedRepositories = this.repositories.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }
  onPageSizechange($event) {
    this.displayedRepositories = this.repositories.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  initializeRepositories(): void {
    this.isLoading = true;
    this.githubService.getRepositories().subscribe(
      (data) => {
        this.repositories = data;
        this.displayedRepositories = this.repositories.slice(0, this.pageSize);
        this.length = this.repositories.length;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
}
