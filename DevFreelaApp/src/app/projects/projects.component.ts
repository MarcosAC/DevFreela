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

  public projects = [
    {title: 'App Mobile', description: 'Desenvolver App', totalCost: 'R$ 12000,00' },
    {title: 'Banco de Dados', description: 'Desenvolver banco de dados', totalCost: 'R$ 12000,00' },
    {title: 'Sistema Web', description: 'Desenvolver Sistema eb', totalCost: 'R$ 15000,00' },
    {title: 'ChatBot', description: 'Desenvolver chatbot', totalCost: 'R$ 15000,00' }
  ];    
}
