import { Injectable, signal } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ConfigService {
	showNav = signal<boolean>(true);
}
