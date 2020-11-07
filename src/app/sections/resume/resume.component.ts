import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';



@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  language: string = "en-US";


  ngOnInit(): void {
    localStorage.setItem("lang","en-US");
  }

  setFR(){
    localStorage.setItem("lang","fr-EN");
    this.language = ('fr-EN')
  }
  setEN(){
    localStorage.setItem("lang","en-US");
    this.language = ('en-US')
  }
  navigateTo(route) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
