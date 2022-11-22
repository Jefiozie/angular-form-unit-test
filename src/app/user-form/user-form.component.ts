import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface UserFormValue {
  name: string;
  date_of_birth: Date|null;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent {
  @Input()
  value!: UserFormValue;

  @Output()
  save = new EventEmitter<UserFormValue>();

  @ViewChild(NgForm)
  form!: NgForm;

  get isFormInvalid(): boolean {
    return this.form?.invalid ?? true;
  }
  
  onSaveClick() {
    if(this.form.invalid) {
      return;
    }

    this.save.emit(this.form.value);
  }
}
