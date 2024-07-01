import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../http/user.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {

  me: User | undefined;

  updateForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService, private formBuilder: FormBuilder, private route: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.userService.getMe().subscribe({
      next: (me) => {
        this.me = me;
        this.updateForm.patchValue(me);
      },
    });
  }

  logout() {
    sessionStorage.removeItem('token');
    void this.route.navigate(['/auth/login']);
  }

  submit() {
    if (this.updateForm.valid) {
      this.userService.updateMe(this.updateForm.value.username!, this.updateForm.value.email!).subscribe(() => {
        this.messageService.add({severity: 'success', detail: 'Profil mis à jour avec succès'});
      });
    }
  }
}
