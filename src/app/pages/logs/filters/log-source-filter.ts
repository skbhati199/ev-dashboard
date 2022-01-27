import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { sources } from '../../../shared/model/logs.model';

export class LogSourceTableFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'source',
      httpId: 'Source',
      type: FilterType.DROPDOWN,
      name: 'logs.source',
      class: 'col-sm-4 col-md-3 col-lg-2 col-xl-1',
      label: '',
      currentValue: [],
      items: Object.assign([], sources),
      multiple: true,
      exhaustive: true
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
