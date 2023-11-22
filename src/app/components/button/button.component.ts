import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-button",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.css",
})
export class ButtonComponent {
	@Input() label: string = "";
	@Output() clicked: EventEmitter<void> = new EventEmitter<void>();
	@Input() customClasses: string = "";
	handleClick(): void {
		this.clicked.emit();
	}
}
