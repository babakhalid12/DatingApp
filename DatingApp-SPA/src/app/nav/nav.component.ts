import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = { };

  constructor(private authService: AuthService, private alertify: AlertifyService, private router : Router) { }

  ngOnInit() { 
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('sucessfully');
    }, error => { 
      this.alertify.error(error.statusText);
    },() => {
      this.router.navigate(['/members']);
    });
    
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('loggedOut success');
    this.router.navigate(['/home']);
  }

}
