import { FilterDef, FilterType } from 'types/Filters';

import { KeyValue } from '../../../types/GlobalType';
import { BaseFilter } from './base-filter';

export class ErrorTypeTableFilter extends BaseFilter {
  public constructor(types: KeyValue[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'errorType',
      httpId: 'ErrorType',
      type: FilterType.DROPDOWN,
      name: 'errors.title',
      class: 'col-sm-4 col-md-4 col-lg-3 col-xl-2 ',
      label: '',
      currentValue: [],
      items: Object.assign([], types),
      multiple: true,
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
