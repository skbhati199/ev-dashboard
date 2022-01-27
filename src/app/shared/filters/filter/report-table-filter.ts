import { FilterDef, FilterType } from 'types/Filters';

import { ReportsDialogComponent } from '../../dialogs/reports/reports-dialog.component';
import { BaseFilter } from './base-filter';

// Sort table by reports ID
export class ReportTableFilter extends BaseFilter {
  public constructor() {
    super();

    // Define filter
    const filterDef: FilterDef = {
      id: 'refundData',
      httpId: 'ReportIDs',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      name: 'transactions.reportId',
      class: 'col-md-6 col-lg-3 col-xl-2',
      dialogComponent: ReportsDialogComponent,
      multiple: true,
      cleared: true,
    };

    // Set
    this.setFilterDef(filterDef);
  }
}
