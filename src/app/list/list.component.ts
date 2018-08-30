import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private service: MyServiceService) {}
  peoples;

  ngOnInit() {
    this.getPeopleData();
  }
  getPeopleData(): void {
    this.service
      .getPeople()
      .subscribe(
        data => this.getPeopleList(data),
        error => this.getPeopleList(error)
      );
  }
  getPeopleList(data) {
    console.log(data);
    this.peoples = data;
    console.log(data);
    console.log(this.peoples);
  }
}
