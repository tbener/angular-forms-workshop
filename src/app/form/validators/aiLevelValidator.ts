import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RobotForm } from '../robot-form.interface';

export function aiLevelValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.parent || !control.root) {
            return null;
        }

        const model = control.root.get('technicalSpecs.model')?.value;
        const aiLevel = control.value;

        if (model < 10 && aiLevel > 5) {
            return { aiLevelInvalid: true };
        }
        return null;
    };
}

export function modelToAiLevelValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const model = control.get('technicalSpecs.model');
        const aiLevel = control.get('capabilities.aiLevel');

        if (model && aiLevel) {
            if (model.value < 10 && aiLevel.value > 5) {
                aiLevel.setErrors({ aiLevelInvalid: true });
            } else if (aiLevel.errors && aiLevel.errors['aiLevelInvalid']) {
                // If the specific error is set, remove it when the condition is not met
                const { aiLevelInvalid, ...otherErrors } = aiLevel.errors;
                aiLevel.setErrors(Object.keys(otherErrors).length ? otherErrors : null);
            }
        }
        return null;
    }
}
