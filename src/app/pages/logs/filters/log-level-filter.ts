import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { logLevels } from '../../../shared/model/logs.model';

export class LogLevelTableFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'level',
      httpId: 'Level',
      type: FilterType.DROPDOWN,
      name: 'logs.levels',
      class: 'col-sm-4 col-md-3 col-lg-2 col-xl-1',
      label: '',
      currentValue: [],
      items: Object.assign([], logLevels),
      multiple: true,
      exhaustive: true
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
