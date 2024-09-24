export interface RobotForm {
    name: string;
    technicalSpecs: {
        model: number;
        weight: number;
        batteryLife: number;
    };
    capabilities: {
        aiLevel: number;
        programmingLanguages: string[];
        canFly: boolean;
    };
}