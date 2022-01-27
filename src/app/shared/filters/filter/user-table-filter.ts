import { FilterDef, FilterType } from 'types/Filters';

import { UsersDialogComponent } from '../../dialogs/users/users-dialog.component';
import { BaseFilter } from './base-filter';

export class UserTableFilter extends BaseFilter {
  public constructor(dependentFilters?: FilterDef[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'user',
      httpId: 'UserID',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      name: 'logs.users',
      class: 'col-md-6 col-lg-4 col-xl-2',
      dialogComponent: UsersDialogComponent,
      multiple: true,
      cleared: true,
      dependentFilters
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
