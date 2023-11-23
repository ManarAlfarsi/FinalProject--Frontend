import { Component, OnInit, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../components/card/card.component";
import { SearchComponent } from "../../components/search/search.component";
import { ButtonComponent } from "../../components/button/button.component";
import { HttpClient } from "@angular/common/http";
import { CandleInterface } from "../../models/candle.model";

interface Candle {
	id: number;
	name: string;
	description: string;
	price: number;
}
@Component({
	selector: "app-candles",
	standalone: true,
	imports: [CommonModule, CardComponent, SearchComponent, ButtonComponent],
	templateUrl: "./candles.component.html",
	styleUrl: "./candles.component.css",
})
export class CandlesComponent implements OnInit {
	candles: Candle[] = [];
	registeredCandles = signal([]);
	http = inject(HttpClient);
	ngOnInit(): void {
		this.http
			.get<Candle[]>("http://localhost:8080/api/candles")
			.subscribe((res) => {
				this.candles = res;
				console.log(this.candles);
			});
	}
	addCandle(candle: CandleInterface): void {
		let candlesArray = new Set();
		const candlesStore = localStorage.getItem("candles");
		if (candlesStore === null) {
			candlesArray.add(candle);
			localStorage.setItem("candles", JSON.stringify([...candlesArray]));
		} else {
			candlesArray = new Set(JSON.parse(localStorage.getItem("candles")||"[]"));
			candlesArray.add(candle);
			localStorage.setItem("candles", JSON.stringify([...candlesArray]));
		}
		// this.http.post;
		// console.log("clicked", id);
	}
}
