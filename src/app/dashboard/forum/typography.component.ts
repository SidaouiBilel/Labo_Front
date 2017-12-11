import {Component, OnInit} from '@angular/core';
import {MembreService} from "../../services/membre-service.service";

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html',
    providers:[MembreService]
})

export class TypographyComponent implements OnInit{


  constructor() {

  }
  ngOnInit() {
  }
}
