import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projectForm',
  templateUrl: './projectForm.component.html',
  styleUrls: ['./projectForm.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }  

  ngOnInit() {
  }

  createForm() {
    this.projectFormGroup = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],  
      comentarios: ['', Validators.required],          
    });
  }

  createProject() {
    console.log(this.projectFormGroup.value);
  }

}
