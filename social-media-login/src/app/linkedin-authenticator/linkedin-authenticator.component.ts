import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';


@Component({
  selector: 'linkedin-authenticator',
  templateUrl: './linkedin-authenticator.component.html',
  styleUrls: ['./linkedin-authenticator.component.scss']
})
export class LinkedinAuthenticatorComponent implements OnInit {
  httpClient: HttpClient
  authResponse: any
  authUrl: string = 'https://www.linkedin.com/oauth/v2/authorization'
  tokenUrl: string = 'https://www.linkedin.com/oauth/v2/accessToken'

  authOptions = {
    response_type: 'code',
    client_id: '78q29vy802fu30',
    // redirect_uri: 'http://localhost:4200',
    redirect_uri: 'https://oauth.pstmn.io/v1/callback',
    state: "foobar",
    scope: 'profile '
  }

  tokenOptions = {
    grant_type: 'authorization_code',
    code: '',
    client_id: '78q29vy802fu30',
    client_secret: 'WPL_AP1.Eu92Z6O6QUJFdLJI.BsB0uQ==',
    redirect_uri: 'http://localhost:4200',
    // redirect_uri: 'https://oauth.pstmn.io/v1/callback',
  }
  
  linkedInCredentials = {
    clientId: "78q29vy802fu30",
    redirectUrl: "http://localhost:4200",
    scope: "profile"
  }

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
   }

  ngOnInit(): void {
  }


  getAuthCode(): void {
    this.authUrl = 
      this.authUrl
      '?response_type=' + this.authOptions.response_type +
      '&client_id=' + this.authOptions.client_id +
      '&redirect_uri=' + this.authOptions.redirect_uri +
      '&state=' + this.authOptions.state + 
      '&scope=' + this.authOptions.scope

    this.authResponse = this.httpClient.get(this.authUrl).subscribe({
      next: (response) => {
        console.log("Successful response: " + response);
      },
      error: (error) => {
        console.log("An error occured: ");
        console.log(error)
      },
    });
  }

  getAccessToken(): void {
    const postOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    const postResponse = this.httpClient.post(this.tokenUrl, this.tokenOptions, postOptions)
    console.log(postResponse)
    
  }

  loginToLinkedIn() {
    window.location.href = 
      this.authUrl +
      "?response_type=code" +
      "&client_id=" + this.linkedInCredentials.clientId +
      "&redirect_uri=" + this.linkedInCredentials.redirectUrl +
      "&scope=" + this.linkedInCredentials.scope
  }

  // For backend stuff with google
  //https://medium.com/@narendrakamath/create-an-angular-7-google-authenticator-node-js-web-app-with-two-factor-authentication-95e87af9356b
  // https://medium.com/@kushalghosh9899/authenticate-with-google-in-angular-17-via-oauth2-196a98793f0c

  // https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?tabs=HTTPS1

  // https://www.linkedin.com/developers/apps/221703016/auth

  // https://stackoverflow.com/questions/57019261/authentication-with-linkedin-api-and-oauth-2-0-in-angular-asp-net-core-2-0-appli
  // Probably need to do something with nodejs backend

}
