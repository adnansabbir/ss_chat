import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  authForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
    });
  }

  join(): void {
    const {email, password} = this.authForm.value;
    this.authService.SignIn(email, password)
      .then(r => {
        // console.log(r);
        // this.authForm.reset();
      });
  }

  register(): void {
    const {email, password} = this.authForm.value;
    this.authService.SignUp(email, password).then(r => {
      // console.log(r);
      // this.authForm.reset();
    });
  }
}
