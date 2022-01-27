import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { TRANSACTION_INACTIVITY_STATUS } from '../../../shared/model/transaction-inactivity-status.model';

export class TransactionsInactivityStatusFilter extends BaseFilter {
  public constructor() {
    super();
    const filterDef: FilterDef = {
      id: 'inactivityStatus',
      httpId: 'InactivityStatus',
      type: FilterType.DROPDOWN,
      name: 'transactions.inactivity',
      class: 'col-md-6 col-lg-4 col-xl-2',
      label: '',
      currentValue: [],
      items: Object.assign([], TRANSACTION_INACTIVITY_STATUS),
      multiple: true,
    };
    this.setFilterDef(filterDef);
  }
}
