import { FilterDef, FilterType } from 'types/Filters';

import { KeyValue } from '../../../types/GlobalType';
import { BaseFilter } from './base-filter';

export class StatusFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'status',
      httpId: 'Active',
      type: FilterType.DROPDOWN,
      name: 'tags.status',
      class: 'col-md-6 col-lg-2 col-xl-2',
      label: '',
      items: Object.assign([], status),
      multiple: true,
      exhaustive: true
    };
    // Set
    this.setFilterDef(filterDef);
  }
}

export const status: KeyValue[] = [
  { key: 'true', value: 'tags.activated' },
  { key: 'false', value: 'tags.deactivated' },
];
