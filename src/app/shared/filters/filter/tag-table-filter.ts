import { FilterDef, FilterType } from 'types/Filters';

import { TagsDialogComponent } from '../../../shared/dialogs/tags/tags-dialog.component';
import { BaseFilter } from './base-filter';

export class TagTableFilter extends BaseFilter {
  public constructor(dependentFilters?: FilterDef[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'tag',
      httpId: 'VisualTagID',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      name: 'users.tags',
      class: 'col-sm-6 col-lg-3 col-md-2',
      dialogComponent: TagsDialogComponent,
      multiple: true,
      cleared: true,
      dependentFilters,
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
