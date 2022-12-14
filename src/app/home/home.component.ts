import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users$!: any;

  getUsers() {
    this.data.getUsers().subscribe(data => {
      this.users$ = data;
      console.log(this.users$)
    })
  }
}
