import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class TabsMainComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  private robotFormService = inject(RobotFormService)
  form = this.robotFormService.getForm();

  robotData = this.robotFormService.robotData;

  constructor() {
    this.form.controls.capabilities.statusChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.cdr.detectChanges();
      })
  }

  onSave() {
    this.robotFormService.saveData()
  }

  ngOnInit(): void {

  }

}
