import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RobotFormService } from '../../form/robot-form.service';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tabs-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './tabs-main.component.html',
  styleUrl: './tabs-main.component.scss',
})
export class TabsMainComponent {
  private cdr = inject(ChangeDetectorRef);

  private robotFormService = inject(RobotFormService);
  form = this.robotFormService.getForm();

  robotData = this.robotFormService.robotData;

  constructor() {
    this.form.controls.capabilities.statusChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.cdr.detectChanges();
      })
  }

  isFormValid(): boolean {
    return this.form.valid;
  }

  get tab1form() {
    return this.robotFormService.getTechnicalSpecsForm();
  }

  get tab2form() {
    return this.robotFormService.getCapabilitiesForm();
  }

  onSave() {
    if (this.isFormValid()) {
      this.robotFormService.saveData();
    }
  }

  isInvalid(fieldName: string): boolean {
    return this.form.get(fieldName)?.invalid && this.form.get(fieldName)?.touched || false;
  }

}
