import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  userInformationsForm!: FormGroup;
  groupForm!: FormGroup;
  sendSimpleDatas = false;
  sendGroupDatas = false;

  ngOnInit(): void {
    this.userInformationsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.groupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      website: new FormControl('', [Validators.required]),
      product: new FormControl('', [Validators.required]),
    });
  }

  onSimpleSubmit() {
    this.sendSimpleDatas = true;
  }

  onGroupSubmit() {
    this.sendGroupDatas = true;
  }

  getSimpleDatasForm() {
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

  getGroupFormDatas() {
    if (this.groupForm.valid) {
      return {
        // @ts-ignore
        username: this.groupForm.controls?.username?.value,
        // @ts-ignore
        price: this.groupForm.controls?.price?.value,
        // @ts-ignore
        website: this.groupForm.controls?.website?.value,
        // @ts-ignore
        product: this.groupForm.controls?.product?.value,
      };
    }
    return;
  }

  cleanSimpleForm() {
    this.userInformationsForm.reset();
    this.sendSimpleDatas = false;
  }

  cleanGroupForm() {
    this.groupForm.reset();
    this.sendGroupDatas = false;
  }
}
