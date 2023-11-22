import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	ActivatedRoute,
	RouterLink,
	RouterLinkActive,
	RouterOutlet,
} from "@angular/router";
import { AuthService } from "./auth.service";
import { ConfigService } from "./config.service";

@Component({
	selector: "app-root",
	// standalone: true,
	// imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
	configService = inject(ConfigService);
	authService = inject(AuthService);
	router = inject(ActivatedRoute);
	ngOnInit(): void {
		const user = localStorage.getItem("user") || "{}";
		// const token = localStorage.getItem("token") || "";
		this.authService.currentUserSignal.set(JSON.parse(user));
		// throw new Error("Method not implemented.");
	}
	title = "candle-store-front-end";
}
