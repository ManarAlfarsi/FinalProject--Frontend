import { Routes } from "@angular/router";
import { CandlesComponent } from "./pages/candles/candles.component";
import { CandleComponent } from "./pages/candles/candle/candle.component";
import { CandleFormComponent } from "./pages/candles/form/form.component";
import { NotFoundComponent } from "./pages/errors/not-found/not-found.component";
import { CustomersComponent } from "./pages/customers/customers.component";
import { OrdersComponent } from "./pages/orders/orders.component";

import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { SiteComponent } from "./pages/site/site.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { CandlesListComponent } from "./pages/candles/list/candlesList.component";
import { authGuard } from "./auth.guard";
import { CartComponent } from "./pages/cart/cart.component";
import { OrderDetailsComponent } from "./pages/order-details/order-details.component";

export const routes: Routes = [
	{ path: "", redirectTo: "site/candles", pathMatch: "full" },
	{
		path: "auth",
		component: AuthComponent,
		children: [
			{ path: "signup", component: SignupComponent },
			{ path: "login", component: LoginComponent },
		],
	},
	{
		path: "site",
		component: SiteComponent,
		children: [
			{ path: "candles", component: CandlesComponent },
			{ path: "cart", component: CartComponent },
		],
	},
	{
		path: "admin",
		component: AdminComponent,
		canActivate: [authGuard],
		children: [
			{ path: "candles", component: CandlesListComponent },
			{
				path: "candles/:id",
				component: CandleFormComponent,
			},
			// {
			// 	path: "candles/new",
			// 	component: CandleFormComponent,
			// },
			{
				path: "customers",
				component: CustomersComponent,
			},
			// Add the rest components for customers
			{
				path: "orders",
				component: OrdersComponent,
			},
      {
				path: "orders/:id",
				component: OrderDetailsComponent,
			},
		],
	},
	// TODO add the rest routes for orders
	{
		path: "**",

		component: NotFoundComponent,
	},
];
