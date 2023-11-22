import { CanActivateFn } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
	const authService = inject(AuthService);
	if (authService.currentUserSignal()?.role === "ROLE_ADMIN") return true;
	else return false;
};
