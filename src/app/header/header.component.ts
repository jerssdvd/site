import { Component, EventEmitter } from "@angular/core";
import { MaterializeAction } from 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  modalActions = new EventEmitter<string|MaterializeAction>();

  closeModal() {
    alert("cccc")
    this.modalActions.emit({action:"side-nav",params:['close']});
}

}