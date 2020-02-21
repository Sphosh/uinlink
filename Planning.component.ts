import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'app-Planning',
  templateUrl: './Planning.component.html',
  styleUrls: ['./Planning.component.css']
})
export class PlanningComponent implements OnInit {

  isClicked: boolean = true;
  isClicked2: boolean = true;
  isClicked3: boolean = true;

  clicked:string ="clicked";
  buttonName:string="Next";

 path: string[] = ['match','aps', 'results'];
 index = 0;
 constructor(private router: Router) { }
 

  

  ngOnInit() {
  }
  previousPage()
  {
  
    this.index--;
    
    if(this.index < 0)
    {
      this.index = 0;
    }
    
    }
 
  nextPage()
  {
    this.index++;

    if(this.buttonName !='Finish'){
    if(this.index > (this.path.length-1))
    {
      this.index = 0;
    }
    if(this.path[this.index]=='aps')
    {
      this.isClicked = false;
      
    }else if(this.path[this.index]=='results')
    {
      this.isClicked2 = false;
      
     
          //if(this.isClicked2===false){this.index = 0;}
    }

    else if(this.path[this.index]=='match')
    {
      this.isClicked3 = false;
      this.buttonName='Finish';
      this.previousPage();
      
    }
   
    this.router.navigate([`Planning/${this.path[this.index]}`])
  }
  

  }
 
  
  }

