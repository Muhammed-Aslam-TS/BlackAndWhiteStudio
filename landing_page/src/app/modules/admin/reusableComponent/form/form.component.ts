import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() formGroup?: FormGroup;
  @Input() fileAcceptTypes?: string;
  @Output() submitted = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    // Initialize your form controls and form group here
  }

  submitForm() {
    // Call this function when the form is submitted
    this.submitted.emit();
  }

  onFileSelected(event: Event) {
    // Handle file selection here
  }
}



