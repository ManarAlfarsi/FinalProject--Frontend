import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import {
	ReactiveFormsModule,
	FormGroup,
	FormControl,
	Validators,
} from "@angular/forms";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { UserResponse } from "../login/login.component";
import { AuthService } from "../../auth.service";
import { ActivatedRoute, Router } from "@angular/router";

interface User {
	email: string;
	password: string;
}
@Component({
	selector: "app-login",
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		HttpClientModule,
		InputComponent,
		ButtonComponent,
	],
	templateUrl: "./signup.component.html",
	styleUrl: "./signup.component.css",
})
export class SignupComponent {
	loginForm = new FormGroup({
		email: new FormControl("", Validators.email),
		password: new FormControl("", Validators.required),
		passworConfirmation: new FormControl("", Validators.required),
		name: new FormControl("", Validators.required),
	});
	showDialog = false;
	authService = inject(AuthService);
	activeRouter = inject(ActivatedRoute);
	router = inject(Router);

	http = inject(HttpClient);
	updateData() {
		this.loginForm.patchValue({
			email: "admin@email.com",
			password: "123456",
		});
	}
	onSubmit() {
		this.http
			.post<UserResponse>(
				"http://localhost:8080/api/customers",
				this.loginForm.getRawValue(),
			)
			.subscribe({
				next: (res) => {
					localStorage.setItem("user", JSON.stringify(res));
					localStorage.setItem("token", res.token);
					this.authService.currentUserSignal.set(res);
					if (res.role === "ROLE_ADMIN") {
						this.router.navigateByUrl("/admin/orders");
					} else {
						this.router.navigateByUrl("/");
					}
				},
				error: (err) => {
					console.log(err);
					this.showDialog = true;
				},
				// error:(
			});
	// console.log(this.loginForm.value);
	}
}
