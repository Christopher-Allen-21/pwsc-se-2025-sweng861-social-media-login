import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'google-authenticator',
  templateUrl: './google-authenticator.component.html',
  styleUrls: ['./google-authenticator.component.scss']
})
export class GoogleAuthenticatorComponent implements OnInit {
httpClient: HttpClient
  url: string = 'https://www.linkedin.com/oauth/v2/authorization'
  options = {
    response_type: 'code',
    client_id: '78q29vy802fu30',
    redirect_uri: 'http://localhost:4200/',
    scope: 'profile'
  }

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
   }

  ngOnInit(): void {
  }


  loginToGoogle(): void {
    this.url += 
      '?response_type=' + this.options.response_type +
      '&client_id=' + this.options.client_id +
      '&redirect_uri=' + this.options.redirect_uri +
      '&scope=' + this.options.scope

    this.httpClient.get(this.url).subscribe({
      next: (response) => {
        console.log("Successful response: " + response);
      },
      error: (error) => {
        console.log("An error occured: " + error);
      },
    });
  }

}
