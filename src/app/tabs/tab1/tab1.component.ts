import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotFormService } from '../../form/robot-form.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.scss',
})
export class Tab1Component {
  private robotFormService = inject(RobotFormService);
  form = this.robotFormService.getTechnicalSpecsForm();

  isInvalid(fieldName: string): boolean {
    return this.form.get(fieldName)?.invalid && this.form.get(fieldName)?.touched || false;
  }

  onSave() {
    this.robotFormService.saveSubForm(this.form);
  }

}
