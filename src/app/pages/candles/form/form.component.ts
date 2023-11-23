import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { InputComponent } from "../../../components/input/input.component";
import { ButtonComponent } from "../../../components/button/button.component";
import { HttpClient } from "@angular/common/http";
import { DialogComponent } from "../../../components/dialog/dialog.component";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { CandleInterface } from "../../../models/candle.model";

@Component({
	selector: "app-form",
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		InputComponent,
		ButtonComponent,
		DialogComponent,
	],
	templateUrl: "./form.component.html",
	styleUrl: "./form.component.css",
})
export class CandleFormComponent implements OnInit {
	candleForm = new FormGroup({
		id: new FormControl(""),
		name: new FormControl("", Validators.required),
		description: new FormControl("", Validators.required),
		price: new FormControl(0, Validators.required),
	});
	http = inject(HttpClient);
	router = inject(ActivatedRoute);
	showDialog = false;
	dialogTitle = "";
	id: string = "";
	ngOnInit(): void {
		this.id = this.router.snapshot.paramMap.get("id") ?? "";
		if (this.id !== "new") {
			this.http
				.get<CandleInterface>(`http://localhost:8080/api/candles/${this.id}`)
				.subscribe((res) => {
					this.candleForm.setValue({
						name: res.name,
						description: res.description,
						price: res.price,
						id: res.id?.toString() ?? "",
					});
				});
		}
	}
	onSubmit() {
		if (this.candleForm.valid) {
			if (this.id === "new")
				this.http
					.post(
						"http://localhost:8080/api/candles",
						this.candleForm.getRawValue(),
					)
					.subscribe({
						next: (res) => {
							this.showDialog = true;
							this.dialogTitle = "Candle add";
							this.candleForm.reset();
						},
						error: (err) => {
							this.showDialog = true;
							this.dialogTitle = "something went rong";
						},
					});
			else {
				this.http
					.put(
						`http://localhost:8080/api/candles/${this.id}`,
						this.candleForm.getRawValue(),
					)
					.subscribe({
						next: (res) => {
							this.showDialog = true;
							this.dialogTitle = "Candle updated";
							// this.candleForm.setValue(res);
						},
						error: (err) => {
							this.showDialog = true;
							this.dialogTitle = "something went rong";
						},
					});
			}
		} else {
			this.showDialog = true;
			this.dialogTitle = "all fields are required";
		}
	}

	closeDialog() {
		this.showDialog = false;
	}
}
