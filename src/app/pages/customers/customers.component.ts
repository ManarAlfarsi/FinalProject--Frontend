import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../../components/button/button.component";
import { CustomerInterFace } from "../../interfaces/customer.interface";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
	selector: "app-customers",
	standalone: true,
	imports: [CommonModule, ButtonComponent,HttpClientModule],
	templateUrl: "./customers.component.html",
	styleUrl: "./customers.component.css",
})
export class CustomersComponent implements OnInit {
	customers: CustomerInterFace[] = [];
	http = inject(HttpClient);
	ngOnInit(): void {
		this.http
			.get<CustomerInterFace[]>("http://localhost:8080/api/customers")
			.subscribe((res) => {
				this.customers = res;
			});
	}
	deleteCustome(id: number) {
		// this.http
		// 	.get<CustomerInterFace[]>("http://localhost:5005/api/customers")
		// 	.subscribe((res) => {
		// 		this.customers = res;
		// 	});
	}
	// del
}
