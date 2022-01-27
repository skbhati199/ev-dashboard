import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { TRANSACTION_INVOICE_STATUS } from '../../../shared/model/transactions-invoices.model';

export class InvoiceStatusFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'status',
      httpId: 'Status',
      type: FilterType.DROPDOWN,
      name: 'general.status',
      class: 'col-md-6 col-lg-4 col-xl-2',
      label: '',
      currentValue: [],
      items: Object.assign([], TRANSACTION_INVOICE_STATUS),
      multiple: true,
    };
    this.setFilterDef(filterDef);
  }
}
