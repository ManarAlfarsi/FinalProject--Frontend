import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";

@Component({
	selector: "app-card",
	standalone: true,
	imports: [CommonModule, ButtonComponent],
	templateUrl: "./card.component.html",
	styleUrl: "./card.component.css",
})
export class CardComponent {
	@Input() title = "";
	@Input() description = "";
	@Input() buttonTitle = "Buy";
	@Output() clicked: EventEmitter<void> = new EventEmitter<void>();
	@Input() name = "";
	handleClick(): void {
		this.clicked.emit();
	}
}
