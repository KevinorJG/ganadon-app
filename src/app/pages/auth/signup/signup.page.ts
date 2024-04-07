import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EMAIL_REGEX } from 'src/app/core/constants/AppConstants';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent]
})
export class SignupPage implements OnInit {

  signupForm: FormGroup = null!;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      age: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
  }

  register() {
  
  }
}
