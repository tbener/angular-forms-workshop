import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotFormService } from '../../form/robot-form.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.scss',
})
export class Tab2Component {
  private robotFormService = inject(RobotFormService);
  form = this.robotFormService.getCapabilitiesForm();

  isInvalid(fieldName: string): boolean {
    return this.form.get(fieldName)?.invalid && this.form.get(fieldName)?.touched || false;
  }
}
