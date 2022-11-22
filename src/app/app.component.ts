import { Component } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { UserFormValue } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form-unit-test';
  emptyUserFormValue: UserFormValue = {
    name: '',
    date_of_birth: null,
  }
  value$ = new BehaviorSubject<UserFormValue|null>(null);

  onSave(user: UserFormValue): void {
    this.value$.next(user);
  }
}
