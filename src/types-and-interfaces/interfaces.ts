export interface DynamicField {
  label: string;
  dataType:
    | 'singleLineText'
    | 'number'
    | 'singleChoice'
    | 'multiChoice'
    | 'multiLineText';
  value: any;
}

export type DynamicFormModel = DynamicField[];
