import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular2', 'Nodejs', 'Expressjs', 'Mongodb'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('suri', 'suri@test.com', 7646576346, 'default','morning', true);

  constructor(private _enrollmentService: EnrollmentService) {}
 validateTopic(value){
   if(value === 'default') {
     this.topicHasError = true;
   } else {
     this.topicHasError = false;
   }

 }

onSubmit() {
  this.submitted = true;
 this._enrollmentService.enroll(this.userModel)
 .subscribe( data => console.log('Success!', data)),
 error => this.errorMsg = error.statusText
}
}
