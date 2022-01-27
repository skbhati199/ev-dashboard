import * as moment from 'moment';
import { FilterDef } from 'types/Filters';

import { FilterType } from '../../../types/Table';
import { BaseFilter } from './base-filter';

export class DateTableFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'timestamp',
      httpId: 'Date',
      type: FilterType.DATE,
      name: 'general.search_date',
      currentValue: moment().startOf('day').toDate(),
      class: 'col-sm-6 col-md-4 col-lg-3 col-xl-2',
      reset: () => filterDef.currentValue = moment().startOf('day').toDate(),
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
