import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/en';
import { locale as french } from '../shared/fr';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',

  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = {
    name: '',
    email: '',
    message: ''
  };


  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);

  }

  ngOnInit(): void {

  }



  public sendEmail() {


    emailjs
      .send('service_96mo0db', 'template_lfn1b4f',this.form, {
        publicKey: 'YSjkRgYmr9cDpyON1'
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
