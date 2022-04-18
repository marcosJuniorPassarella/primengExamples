import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

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
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userInformationsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      age: [Number, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.groupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      price: [Number, [Validators.required]],
      website: ['', [Validators.required]],
      product: ['', [Validators.required]],
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

  sendContactDatas() {
    console.log(this.contactForm.value);
  }
}
