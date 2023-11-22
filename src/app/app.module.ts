import { NgModule } from "@angular/core";
import {
	RouterLink,
	RouterLinkActive,
	RouterModule,
	RouterOutlet,
} from "@angular/router";
import { routes } from "./app.routes";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
	],
	exports: [AppRoutingModule],
	providers: [
		[{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
