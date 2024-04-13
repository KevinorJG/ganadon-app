import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { AUTH_USER, EMAIL_REGEX } from 'src/app/core/constants/AppConstants';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink, ButtonComponent, InputComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = null!;
  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });

  }

  ngOnInit() {
    if(!this.isAuth()){
      return;
    }

    this.router.navigate(['/app'], {
      replaceUrl: true,
    });

  }

  onSubmit() {
    const infoUser = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    localStorage.setItem(AUTH_USER, JSON.stringify(infoUser));

    this.router.navigate(['/app'], {
      replaceUrl: true,
    })
  }


  isAuth(){
    return localStorage.getItem(AUTH_USER) != null;
  }

  

}
