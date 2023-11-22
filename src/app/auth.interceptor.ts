import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpInterceptorFn,
	HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
	const token = localStorage.getItem("token") ?? "";
	const req = request.clone({
		setHeaders: token
			? {
					Authorization: token ? `Bearer ${token}` : "",
			  }
			: {},
	});

	return next(req);
};
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		const token = localStorage.getItem("token") ?? "";
		const req = request.clone({
			setHeaders: {
				Authorization: token ? `Bearer ${token}` : "",
			},
		});

		return next.handle(req);
	}
}
