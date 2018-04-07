import { Component } from "@angular/core"; // need to import the component decorator before we can use it.

@Component({
  selector: 'pm-root',
  templateUrl: 'app.component.html',

})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
