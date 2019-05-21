import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pesohome';
  showloader :boolean=true;
  constructor(){
    setTimeout(()=>{
      this.showloader=false;
    },3000);
  }
}
