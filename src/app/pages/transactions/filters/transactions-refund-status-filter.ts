import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { TRANSACTION_REFUND_STATUS } from '../../../shared/model/transaction-refund-status.model';

export class TransactionsRefundStatusFilter extends BaseFilter {
  public constructor() {
    super();
    const filterDef: FilterDef = {
      id: 'transactionStatus',
      httpId: 'RefundStatus',
      type: FilterType.DROPDOWN,
      name: 'transactions.state',
      class: 'col-md-6 col-lg-4 col-xl-2',
      label: '',
      currentValue: [],
      items: Object.assign([], TRANSACTION_REFUND_STATUS),
      multiple: true,
    };
    this.setFilterDef(filterDef);
  }
}
