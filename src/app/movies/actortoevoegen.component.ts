import { Component }          from '@angular/core';
import { ActivatedRoute }     from "@angular/router";

@Component({
  selector:                        'actortoevoegen',
  templateUrl:                     './actortoevoegen.component.html',
})
export class ActorToevoegenComponent {
  title = 'moviemenu';

constructor(route: ActivatedRoute) {

      route.params.subscribe(params => console.log("side menu id parameter",params['id']));

  }
}