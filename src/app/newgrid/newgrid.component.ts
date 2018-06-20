import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.css']
})
export class NewGridComponent implements OnInit {
  public localData: any[];
  title = 'newGrid';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
