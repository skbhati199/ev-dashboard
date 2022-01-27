import { KeyValue } from './GlobalType';

export enum FilterType {
  ALL_KEY = 'all',
  DROPDOWN = 'dropdown',
  DIALOG_TABLE = 'dialog-table',
  DATE = 'date',
  DATE_RANGE = 'date-range',
}

export interface FilterDef {
  id: string;
  httpId: string;
  type: FilterType;
  name: string;
  label?: string;
  currentValue?: any;
  defaultValue?: any;
  class?: string;
  items?: KeyValue[];
  dialogComponent?: any;
  dialogComponentData?: any;
  reset?: () => void;
  multiple?: boolean;
  exhaustive?: boolean;
  cleared?: boolean;
  dateRangeTableFilterDef?: DateRangeFilterDef;
  dependentFilters?: FilterDef[];
  visible?: boolean;
}

export interface DateRangeFilterDef {
  singleDatePicker?: boolean;
  minDate?: Date;
  maxDate?: Date;
  timePicker?: boolean;
  timePicker24Hour?: boolean;
  timePickerSeconds?: boolean;
  startDate?: moment.Moment;
  endDate?: moment.Moment;
  locale?: Locale;
  startDateTimeHttpId?: string;
  endDateTimeHttpId?: string;
}

export interface Locale {
  daysOfWeek?: string[];
  monthNames?: string[];
  firstDay?: number;
  displayFormat?: string;
  applyLabel?: string;
}
