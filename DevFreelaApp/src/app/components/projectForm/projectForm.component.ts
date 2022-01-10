import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/ProjectService';

@Component({
  selector: 'app-projectForm',
  templateUrl: './projectForm.component.html',
  styleUrls: ['./projectForm.component.css']
})
export class ProjectFormComponent implements OnInit, OnDestroy {

  projectFormGroup!: FormGroup;
  project!: Project;

  public projects!: Project[];

  private unsubscriber = new Subject();

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.listProjects();
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

  // listProjects() {
  //   this.projectService.getAll()
  //   .pipe(takeUntil(this.unsubscriber))
  //   .subscribe((projects: Project[]) => {
  //       this.projects = projects;
  //       console.log("Projetos carregados com sucesso.");
  //     }, (error: any) => {
  //       console.log("Erro ao carregados Projetos.");
  //     }
  //   );
  // }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}

