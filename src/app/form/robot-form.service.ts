import { Injectable, signal } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Robot } from '../models/robot.model';
import { fakeRobotData } from '../models/robot.mock';
import { modelToAiLevelValidator } from './validators/aiLevelValidator';

@Injectable({
    providedIn: 'root'
})
export class RobotFormService {

    private fb = new FormBuilder();

    public robotData = signal<Robot>(fakeRobotData);

    robotForm = this.fb.nonNullable.group({
        name: ['', Validators.required],
        technicalSpecs: this.fb.nonNullable.group({
            model: [0, Validators.required],
            weight: [0, Validators.required],
            batteryLife: [0, Validators.required]
        }),
        capabilities: this.fb.group({
            aiLevel: [0, Validators.required],
            programmingLanguages: [[''], Validators.required],
            canFly: [false]
        })
    });

    getForm() {
        return this.robotForm;
    }

    getTechnicalSpecsForm() {
        return this.robotForm.controls.technicalSpecs;
    }

    getCapabilitiesForm() {
        return this.robotForm.controls.capabilities;
    }

    saveData() {
        console.log('Form Value: ', this.robotForm.value);
    }


}

