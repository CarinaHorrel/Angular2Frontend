import { Component }         from  '@angular/core';
import { Router }            from  '@angular/router';
import { AppGlobalService }  from '../app.global.service';

@Component({
  selector:               'navigatie',
  templateUrl:            './navigatie.component.html',
  styles:                 [`
    .nav-link {
      cursor: pointer;
    }
  `]
})
export class NavigatieComponent {
  title = 'navigatie';

  constructor(private router: Router, private appGlobalService: AppGlobalService) {
  }


}


