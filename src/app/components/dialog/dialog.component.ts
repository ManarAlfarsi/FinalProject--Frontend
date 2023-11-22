import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-dialog",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./dialog.component.html",
	styleUrl: "./dialog.component.css",
})
export class DialogComponent {
	@Input() title = "";
	@Input() description = "";
	@Output() close: EventEmitter<void> = new EventEmitter<void>();
	handleClose(): void {
		console.log("clicked");
		this.close.emit();
	}
}
