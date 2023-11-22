import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

	@Input() type = "text";
	@Input() name = "";
	@Input() label = "";
	@Input() placeholder = "";
	@Input() control = new FormControl();
  @Input() inputClass=" ";
  @Input() labelClass=" ";
}
