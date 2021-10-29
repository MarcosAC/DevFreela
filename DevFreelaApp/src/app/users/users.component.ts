import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title = 'Freelancers';

  public freelancers = [
    {id: '1', name: 'Marcos', email: 'marcos@email.com', skills: 'Xamarin Forms C#' },
    {id: '2', name: 'Gildelson', email: 'gil@email.com', skills: 'Python'},
    {id: '3', name: 'Reginaldo', email: 'reginaldo@email.com', skills: 'Java'},
    {id: '4', name: 'Bernardo', email: 'bernardo@email.com', skills: 'C#'}
  ];
}
