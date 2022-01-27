import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { USER_STATUSES } from '../../../shared/model/users.model';

export class UserStatusFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'status',
      httpId: 'Status',
      type: FilterType.DROPDOWN,
      name: 'users.status',
      class: 'col-md-6 col-lg-4 col-xl-2',
      label: '',
      currentValue: [],
      items: Object.assign([], USER_STATUSES),
      multiple: true,
    };
    this.setFilterDef(filterDef);
  }
}
