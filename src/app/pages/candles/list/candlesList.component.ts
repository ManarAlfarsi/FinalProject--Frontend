import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { ButtonComponent } from "../../../components/button/button.component";
import { CandleInterface } from "../../../interfaces/candle.interface";
import { Router, RouterLink } from "@angular/router";
import { DialogComponent } from "../../../components/dialog/dialog.component";

@Component({
	selector: "app-orders",
	standalone: true,
	imports: [CommonModule, DialogComponent, ButtonComponent, RouterLink],
	templateUrl: "./candlesList.component.html",
})
export class CandlesListComponent {
	candles: CandleInterface[] = [];
	http = inject(HttpClient);
	router = inject(Router);
	showDialog = false;
	dialogTitle = "";
	ngOnInit(): void {
		this.http
			.get<CandleInterface[]>("http://localhost:8080/api/candles")
			.subscribe((res) => {
				this.candles = res;
			});
	}
	update(id: number | undefined) {
		this.router.navigateByUrl(`/admin/candles/${id}`);
	}
	deleteCandle(id?: number) {
		this.http.delete(`http://localhost:8080/api/candles/${id}`).subscribe({
			error: (err) => {
				console.log(err);
			},
			next: () => {
				this.showDialog = true;
				this.dialogTitle= "Deleted";
			},
		});
	}
	closeDialog() {
		this.showDialog = false;
	}
  newCandle(){
    this.router.navigateByUrl(`/admin/candles/new`);
  }
}
