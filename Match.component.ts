import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Match',
  templateUrl: './Match.component.html',
  styleUrls: ['./Match.component.css']
})
export class MatchComponent implements OnInit {
path: string[]=['aps'];
index = 0;
  constructor(private router:Router) { }

  showOption:boolean=false;
  ngOnInit() {
  }
  
  show()
  {
    this.showOption=!this.showOption;
  }

  nextPage()
  {
    this.index++;

    if(this.index > (this.path.length-1))
    {
      this.index = 0;
    }


    this.router.navigate([`Planning/${this.path[this.index]}`])
  }

}
