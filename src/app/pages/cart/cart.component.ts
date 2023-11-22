import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";
import { OrderInterface } from "../../interfaces/order.interface";
import { HttpClient } from "@angular/common/http";
import { CandleInterface } from "../../interfaces/candle.interface";

@Component({
	selector: "app-cart",
	standalone: true,
	imports: [CommonModule, CardComponent, ButtonComponent],
	templateUrl: "./cart.component.html",
	styleUrl: "./cart.component.css",
})
export class CartComponent implements OnInit {
	candles: CandleInterface[] = [];
	http = inject(HttpClient);
	ngOnInit(): void {
		this.candles = JSON.parse(localStorage.getItem("candles") || "[]");
	}
	clickCard(id?: number) {
		this.candles = this.candles.filter((item) => item?.id !== id);
		localStorage.setItem("candles", JSON.stringify([...this.candles]));
	}

	order() {
		this.http
			.post<{ candles: CandleInterface[] }>(
				"http://localhost:8080/api/orders",
				{ candles: this.candles },
			)
			.subscribe({
				next: (res) => {
					console.log(res);
					localStorage.removeItem("candles");
					this.candles = [];
				},
				error: (err) => {
					console.log(err);
				},
			});
	}
}
