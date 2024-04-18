import { Component,} from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  value="moon";
  func(xx:string){
    
    this.value=xx;
  }

}
