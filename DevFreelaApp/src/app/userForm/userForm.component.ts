import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userForm',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {

  userFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.userFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  createAccount() {
    console.log(this.userFormGroup.value);
  }

}
