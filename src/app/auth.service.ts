import { Injectable, inject, signal } from "@angular/core";
import { Router } from "@angular/router";

export interface UserInterface {
	email: string;
	token: string;
	name: string;
	role: string;
}
@Injectable({
	providedIn: "root",
})
export class AuthService {
	currentUserSignal = signal<UserInterface | null | undefined>(undefined);
	router = inject(Router);
	logout() {
		// console.log("in service");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		this.currentUserSignal.set(null);
		this.router.navigateByUrl("/");
	}
}
