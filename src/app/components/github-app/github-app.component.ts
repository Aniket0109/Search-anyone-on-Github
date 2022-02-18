import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'gp-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery!: string;
  public githubProfile:any;
  public githubRepos:any[] | undefined;
  public errorMessage:string | undefined;

  constructor(private githubService:GithubServiceService) { }

    public searchUser(){
      
      this.githubService.getProfile(this.githubUserQuery).subscribe((data) =>{

        this.githubProfile = data;

      },(error)=>{

        this.errorMessage = error;
        
      });

      // To get repos

      this.githubService.getRepos(this.githubUserQuery).subscribe((data)=>{

        this.githubRepos = data;

      },(error)=>{

        this.errorMessage = error;
        
      });
    }

  ngOnInit(): void {
  }
}