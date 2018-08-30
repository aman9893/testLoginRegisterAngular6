
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormsModule, FormControl,
      Validators, FormBuilder } from '@angular/forms';
import {  Input, Inject} from '@angular/core';
import {MyServiceService} from '../service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPage = true;
  regitserPage: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private service: MyServiceService) { }

    loginForm: FormGroup;
    contactForm: FormGroup;

   ngOnInit() {
    this.createForm();
    this.loginForms();
        }

 private createForm() {
    this.contactForm = this.formBuilder.group({
         name: new FormControl('', {
         validators: [Validators.required, Validators.maxLength(55)],
          updateOn: 'change'
          }),
          email: new FormControl(''),
         password: new FormControl(''),

        });
      }
 getError() {  return '*This is required field'; }

    onSubmit() {
        if (this.contactForm.valid) {
        console.log(this.contactForm.value);
         const  formData = {
           name  : this.contactForm.controls ['name'].value,
           email  : this.contactForm.controls ['email'].value,
          password  : this.contactForm.controls ['password'].value,
                };
        this.service.Register(formData).subscribe(
          data => this.closeDialog(data),
          error => this.closeDialog(error)
      );
    }
        this.contactForm.reset();
   }
     closeDialog(data) {
        console.log(data);
   }
  //  login part
 private loginForms() {
    this.loginForm = this.formBuilder.group({
          email: new FormControl(''),
         password: new FormControl(''),

        });
      }
    onSubmitlogin() {
        if (this.loginForm.valid) {
        console.log(this.loginForm.value);
         const  formData = {
           email  : this.loginForm.controls ['email'].value,
          password  : this.loginForm.controls ['password'].value,
                };
        this.service.Login(formData).subscribe(
          data => this.checkDialog(data),
          error => this.checkDialog(error)
      );
    }
   }
     checkDialog(data) {
      console.log(data);
      this.router.navigate(['/home']);
    }

  login () {
    this.loginPage = true;
    this.regitserPage = false;
  }
  register() {
    this.loginPage = false;
    this.regitserPage = !this.regitserPage;
  }
}
