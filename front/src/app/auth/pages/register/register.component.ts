import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../http/auth.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';

type RegisterFormData = FormGroup<{
  email: FormControl<string | null>;
  username: FormControl<string | null>;
  password: FormControl<string | null>
}>;

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {

  registerForm: RegisterFormData = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)]),
  });

  private registerSubscriber: Subscription;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private messageService: MessageService, private route: Router) {
  }

  /**
   * Unsubscribe from the register subscriber
   */
  ngOnDestroy(): void {
    this.registerSubscriber?.unsubscribe();
  }

  /**
   * Submit the register form
   * If the form is valid, register the user
   * If the registration is successful, store the token in the session storage and redirect to the feed page
   * If the registration fails, display an error message
   */
  submit(): void {
    if (this.registerForm.valid) {
      this.registerSubscriber = this.authService.register(this.registerForm.value.username!, this.registerForm.value.email!, this.registerForm.value.password!).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', detail: 'Inscription avec succès'});
          sessionStorage.setItem('token', response.token);
          void this.route.navigate(['/feed']);
        },
        error: (httpError: HttpErrorResponse) => {
          this.registerForm.controls.email.setErrors({invalid: true});
          this.registerForm.controls.password.setErrors({invalid: true});
          this.messageService.add({severity: 'error', detail: httpError.error.message});
        },
      });
    }
  }

}
