import { FilterDef, FilterType } from 'types/Filters';

import { SitesDialogComponent } from '../../../shared/dialogs/sites/sites-dialog.component';
import { BaseFilter } from './base-filter';

export class SiteTableFilter extends BaseFilter {
  public constructor(dependentFilters?: FilterDef[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'sites',
      httpId: 'SiteID',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      multiple: true,
      name: 'sites.titles',
      class: 'col-md-6 col-lg-3 col-xl-2',
      dialogComponent: SitesDialogComponent,
      cleared: true,
      dependentFilters
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
