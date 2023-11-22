import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
	selector: "app-site",
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
	templateUrl: "./site.component.html",
	styleUrl: "./site.component.css",
})
export class SiteComponent {
	authService = inject(AuthService);
}
