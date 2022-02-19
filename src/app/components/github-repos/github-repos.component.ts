import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gp-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {


  @Input() githubRepos:any[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
