import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RobotFormService } from '../../form/robot-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab1Component {
  private robotFormService = inject(RobotFormService);
  form = this.robotFormService.getTechnicalSpecsForm();

  isInvalid(fieldName: string): boolean {
    return this.form.get(fieldName)?.invalid && this.form.get(fieldName)?.touched || false;
  }
}
