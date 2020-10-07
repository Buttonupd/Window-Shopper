import { Component } from '@angular/core';
import  {Router} from "@angular/router";
import {AuthService} from './shared/services/auth.service';
import {UserService} from "@./shared/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  constructor(private userService: UserService, private auth: AuthService,
    auth.user$.subscribe(user => {
      if (!user) return;
      UserService.save(user);

      let returnurl = localStorage.getItem('returnUrl');
      if (!returnurl) return;
      localStorage.removeItem('returnUrl')
      Router.navigateByUrl(returnurl)
    }))
}
