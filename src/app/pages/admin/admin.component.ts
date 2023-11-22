import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
	selector: "app-admin",
	standalone: true,
	imports: [CommonModule, RouterLinkActive, RouterOutlet, RouterLink],
	templateUrl: "./admin.component.html",
	styleUrl: "./admin.component.css",
})
export class AdminComponent {
	authService = inject(AuthService);
}
