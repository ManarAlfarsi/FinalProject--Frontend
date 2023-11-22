import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "../../auth.service";
import { ConfigService } from "../../config.service";
import { DialogComponent } from "../../components/dialog/dialog.component";
interface User {
	email: string;
	password: string;
}
export interface UserResponse {
	token: string;
	name: string;
	role: string;
	email: string;
}
@Component({
	selector: "app-login",
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputComponent,
		ButtonComponent,
		RouterLink,
		DialogComponent,
	],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
	login = "login";
	showDialog = false;
	authService = inject(AuthService);
	activeRouter = inject(ActivatedRoute);
	router = inject(Router);
	loginForm = new FormGroup({
		email: new FormControl("", Validators.email),
		password: new FormControl(""),
	});
	http = inject(HttpClient);
	configService = inject(ConfigService);
	ngOnInit(): void {
		// console.log(this.activeRouter.data.subscribe((data) => console.log(data)));
		// this.configService.showNav.set(false);
	}
	onSubmit() {
		this.http
			.post<UserResponse>(
				"http://localhost:8080/auth/signin",
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
	}
  closeDialog(){
    this.showDialog=false
  }
}
