import { Component, OnInit, Directive } from '@angular/core';
import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';


declare var $ : any;
@Component({
  selector: 'menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
// @Directive({
//   selector: '[menup]'
// })
export class MenuPrincipalComponent implements OnInit {

  constructor() { }
  options = {
    inDuration: 150,
    outDuration: 225,
    constrainWith: true,
    hover: true

  };
  ngOnInit() {
    
     var elems = document.querySelectorAll('.dropdown-trigger');
     var instances1 = M.Dropdown.init(elems, this.options);


  }

}
