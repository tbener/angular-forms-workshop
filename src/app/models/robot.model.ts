export interface Robot {
  name: string;

  /* Technical Specs */
  model: number;
  weight: number;
  batteryLife: number;

  /* Capabilities */
  aiLevel: number;
  programmingLanguages: string[];
  canFly: boolean;
}
