import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showToolbar = false;
  navigation: any[] = [
    {
      name: 'Dashboard',
      type: 'url',
      route: '/dashboard'
    },
    {
      name: 'Rooms',
      type: 'url',
      route: '/rooms'
    },
    {
      name: 'Logout',
      type: 'action',
      action: this.logout.bind(this)
    }
  ];

  constructor(private authService: AuthService) {
    this.authService.currentUserChanged.subscribe(res => {
      this.showToolbar = this.authService.isLoggedIn;
    });
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.SignOut();
  }
}
