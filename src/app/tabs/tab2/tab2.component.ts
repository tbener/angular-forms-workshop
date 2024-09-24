import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { RobotFormService } from '../../form/robot-form.service';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab2Component implements OnInit {
  private robotFormService = inject(RobotFormService);
  form = this.robotFormService.getCapabilitiesForm();
  private cdr = inject(ChangeDetectorRef);
  public readonly isInvalidSignal = signal<boolean>(false);


  ngOnInit(): void {
    // debugger
    // this.isInv.set(this.form.controls.aiLevel.invalid)
    // this.robotFormService.getForm().controls.technicalSpecs.valueChanges.subscribe(() => {
    //   console.log('detectChanges');
    //   this.isInv.set(this.form.controls.aiLevel.invalid)

    // })
    this.form.controls.aiLevel.statusChanges.subscribe(() => {
      // this.form.controls.aiLevel.updateValueAndValidity();
      // this.cdr.detectChanges();
    })
  }

  isInvalid(fieldName: string): boolean {
    return this.form.get(fieldName)?.invalid || true; // && this.form.get(fieldName)?.touched || false;
  }
}
