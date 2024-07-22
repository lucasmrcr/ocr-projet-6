import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../http/user.service';
import {MessageService} from 'primeng/api';
import {Subscription} from 'rxjs';

type UpdateFormData = FormGroup<{
  email: FormControl<string | null>;
  username: FormControl<string | null>;
}>

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {

  me: User | undefined;

  updateForm: UpdateFormData = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
  });

  private getMeSubscription: Subscription;
  private updateMeSubscription: Subscription;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private route: Router, private messageService: MessageService) {
  }

  /**
   * Unsubscribe from the getMeSubscription and updateMeSubscription when the component is destroyed
   */
  ngOnDestroy(): void {
    this.getMeSubscription?.unsubscribe();
    this.updateMeSubscription?.unsubscribe();
  }

  /**
   * Get the user information
   */
  ngOnInit(): void {
    this.getMeSubscription = this.userService.getMe().subscribe({
      next: (me) => {
        this.me = me;
        this.updateForm.patchValue(me);
      },
    });
  }

  /**
   * Logout the user
   */
  logout(): void {
    sessionStorage.removeItem('token');
    void this.route.navigate(['/auth/login']);
  }

  /**
   * Submit the form
   */
  submit(): void {
    if (this.updateForm.valid) {
      this.updateMeSubscription = this.userService.updateMe(this.updateForm.value.username!, this.updateForm.value.email!).subscribe(() => {
        this.messageService.add({severity: 'success', detail: 'Profil mis à jour avec succès'});
      });
    }
  }
}
