import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../http/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

type LoginFormData = FormGroup<{
  email: FormControl<string | null>;
  password: FormControl<string | null>
}>;

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {

  loginForm: LoginFormData = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  private loginSubscriber: Subscription;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private messageService: MessageService, private route: Router) {
  }

  /**
   * Unsubscribe from the login subscriber
   */
  ngOnDestroy(): void {
    this.loginSubscriber?.unsubscribe();
  }

  /**
   * Submit the login form
   */
  submit(): void {
    if (this.loginForm.valid) {
      this.loginSubscriber = this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', detail: 'Connexion avec succès'});
          sessionStorage.setItem('token', response.token);
          void this.route.navigate(['/feed']);
        },
        error: (httpError: HttpErrorResponse) => {
          this.loginForm.controls.email.setErrors({invalid: true});
          this.loginForm.controls.password.setErrors({invalid: true});
          this.messageService.add({severity: 'error', detail: httpError.error.message});
        },
      });
    }
  }

}
