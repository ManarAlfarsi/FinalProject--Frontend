import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { OrderInterface } from "../../interfaces/order.interface";
import { Router } from "@angular/router";

@Component({
	selector: "app-orders",
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: "./orders.component.html",
	styleUrl: "./orders.component.css",
})
export class OrdersComponent {
	orders: OrderInterface[] = [];
	http = inject(HttpClient);
	router = inject(Router);
	ngOnInit(): void {
		this.http
			.get<OrderInterface[]>("http://localhost:8080/api/orders")
			.subscribe((res) => {
				this.orders = res;
			});
	}
	viewOrder(id?: number) {
		this.router.navigateByUrl(`/admin/orders/${id}`);
	}
}
