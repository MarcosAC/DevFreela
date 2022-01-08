import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/ProjectService';

@Component({
  selector: 'app-projectForm',
  templateUrl: './projectForm.component.html',
  styleUrls: ['./projectForm.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectFormGroup!: FormGroup;

  project!: Project;

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.projectFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      IdClient: ['', Validators.required],
      idFreelance: ['', Validators.required],
      totalCost: ['', Validators.required],
      startedAt: ['', Validators.required],
      finishedAt: ['', Validators.required],
      createdAt: [Date.now()],
      status: ['', Validators.required],
      comments: ['', Validators.required],
    });
  }

  createProject() {
    this.project = {...this.projectFormGroup.value}
    this.projectService.post(this.project)
    .subscribe(
      () => {
        console.log("Projeto criado com sucesso.");
      }, () => {
        console.log("Erro ao criar projeto.");
      }
    );
  }
}
