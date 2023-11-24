import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formGroup: FormGroup;

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    public authService: AuthService
    ) { 
      this.formGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });
    }


  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  createAccount() {
    if (
      this.formGroup.valid && 
      this.formGroup.value && 
      this.formGroup.get('password')?.value === this.formGroup.get('confirmPassword')?.value) 
    {
      const values = {
        name: this.formGroup.get('name')?.value,
        email: this.formGroup.get('email')?.value,
        password: this.formGroup.get('password')?.value
      }

      this.authService.createAccount(values).subscribe({
        next: (res) => {
          console.log('Conta criada! ', res);
          this.router.navigate(['token-verification']);
          this.authService.saveToken((res as any).token);
        },
        error: (err) => {
          console.error('Erro => ', err);
        }
      })

    }
  }



}
