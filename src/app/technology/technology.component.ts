import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  num=1;
  func(x:number){
    this.num=x;
  }

}
