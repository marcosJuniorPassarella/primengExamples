import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  userInformationsForm!: FormGroup;
  sendDatas = false;

  ngOnInit(): void {
    this.userInformationsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.sendDatas = true;
  }

  getDatas() {
    if (this.userInformationsForm.valid) {
      return {
        // @ts-ignore
        name: this.userInformationsForm.controls?.name?.value,
        // @ts-ignore
        surname: this.userInformationsForm.controls?.surname?.value,
        // @ts-ignore
        age: this.userInformationsForm.controls?.age?.value,
        // @ts-ignore
        email: this.userInformationsForm.controls?.email?.value,
      };
    }
    return;
  }

  cleanForm() {
    this.userInformationsForm.reset();
    this.sendDatas = false;
  }
}
