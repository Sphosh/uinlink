import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-Results',
  templateUrl: './Results.component.html',
  styleUrls: ['./Results.component.css']
})
export class ResultsComponent implements OnInit {
path: string[] = ['match'];
index = 0;


  constructor(private router:Router) { }

  ngOnInit() {
  }

}
