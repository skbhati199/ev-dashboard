import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { LogActionsDialogComponent } from '../../../shared/dialogs/logs/log-actions-dialog.component';

export class LogActionTableFilter extends BaseFilter {
  public constructor(actions?: readonly string[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'action',
      httpId: 'Action',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      name: 'logs.actions',
      class: 'col-md-6 col-lg-4 col-xl-2',
      dialogComponent: LogActionsDialogComponent,
      multiple: true,
      cleared: true,
    };

    if (actions) {
      filterDef.dialogComponentData = {
        staticFilter: {
          Action: actions.join('|'),
        },
      };
    }
    // Set
    this.setFilterDef(filterDef);
  }
}
