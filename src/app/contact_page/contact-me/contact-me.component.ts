import { Component, HostBinding, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NavigateAnimationService } from 'src/app/navigation/navigate-animation.service';
import { ContactService } from '../contact.service';
import { Validator } from '../validator';
import { routeAnimationState } from 'src/app/route_transition_animations';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  animations: [routeAnimationState],
})
export class ContactMeComponent implements OnInit {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
  constructor(private Fb: FormBuilder) {}
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.Fb.group({
      name: ['', [Validator.nameValidator]],
      email: new FormControl(''),
      message: ['', [Validator.nameValidator]],
    });
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(this.myForm);
    console.log('==============');
    console.log(e);
    emailjs
      .send(
        'service_r2lm3zi',
        'template_hlrw9d9',
        {
          name: this.myForm.value['name'],
          reply: this.myForm.value['email'],
          message: this.myForm.value['message'],
        },
        'hkYqzWBQuYVKpqlgp'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
