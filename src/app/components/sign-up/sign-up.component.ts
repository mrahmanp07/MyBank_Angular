import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

signUpForm: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
  email:  new FormControl(''),
  role: new FormControl("employee")
});

constructor(public authService: AuthService, private router: Router) { }

onSubmit() {
  this.authService.addData(this.signUpForm.value).subscribe((res: any) => {
    this.router.navigateByUrl('/login');
  });
}

}
