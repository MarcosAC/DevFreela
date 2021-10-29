import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title = 'Projetos';

  public projects = ['Mobile', 'Sistema Web', 'Banco de Dados', 'ChatBot'];

}
