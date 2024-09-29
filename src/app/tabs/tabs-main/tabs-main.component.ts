import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  

  onSave() {
    console.log('Saving form...');
  }


}
