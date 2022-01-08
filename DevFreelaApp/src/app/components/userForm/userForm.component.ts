import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-userForm',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {

  userFormGroup!: FormGroup;

  freelance!: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      createdAt: [Date.now()],
      password: ['', Validators.required],
      role: ['', Validators.required],
      skills: ['', Validators.required]
    });
  }

  createAccount() {
    this.freelance = {...this.userFormGroup.value}
    console.log(this.freelance);
    this.userService.post(this.freelance)
    .subscribe(
      () => {
        console.log("Dados do freelancer cadastrado com sucesso.");
      }, () => {
        console.log("Erro ao cadastrar freelancer.");
      }
    );
  }
}
