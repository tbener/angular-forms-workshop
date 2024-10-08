import { Injectable, signal } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Robot } from '../models/robot.model';
import { fakeRobotData } from '../models/robot.mock';
import { modelToAiLevelValidator } from './validators/aiLevelValidator';

@Injectable({
    providedIn: 'root'
})
export class RobotFormService {
    saveSubForm(formToSave: FormGroup) {
        this.robotData.update(robot => ({...robot, ...formToSave.value}));
      
    }

    private fb = new FormBuilder();

    public robotData = signal<Robot>(fakeRobotData);

    /**
     *
     */
    constructor() {
        this.loadData();
    }

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
    }, { validators: modelToAiLevelValidator() });

    getForm() {
        return this.robotForm;
    }

    getTechnicalSpecsForm() {
        return this.robotForm.controls.technicalSpecs;
    }

    getCapabilitiesForm() {
        return this.robotForm.controls.capabilities;
    }

    loadData() {
        const robotData = this.robotData();

        this.robotForm.setValue({
            name: robotData.name,
            technicalSpecs: {
                model: robotData.model,
                weight: robotData.weight,
                batteryLife: robotData.batteryLife
            },
            capabilities: {
                aiLevel: robotData.aiLevel,
                programmingLanguages: robotData.programmingLanguages,
                canFly: robotData.canFly
            }
        });
    }

    saveData() {
        if (this.robotForm.valid) {
            const formValues = this.robotForm.value;

            const robot: Robot = {
                name: formValues.name!,
                model: formValues.technicalSpecs?.model!,
                weight: formValues.technicalSpecs?.weight!,
                batteryLife: formValues.technicalSpecs?.batteryLife!,
                aiLevel: formValues.capabilities?.aiLevel!,
                programmingLanguages: formValues.capabilities?.programmingLanguages!,
                canFly: formValues.capabilities?.canFly!
            };

            console.log('Saving robot data:', robot);

            this.robotData.set(robot);
        }
    }

}

