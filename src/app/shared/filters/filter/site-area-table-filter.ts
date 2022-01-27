import { FilterDef, FilterType } from 'types/Filters';

import { SiteAreasDialogComponent } from '../../../shared/dialogs/site-areas/site-areas-dialog.component';
import { BaseFilter } from './base-filter';

export class SiteAreaTableFilter extends BaseFilter {
  public constructor(dependentFilters?: FilterDef[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'siteAreas',
      httpId: 'SiteAreaID',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      multiple: true,
      name: 'site_areas.titles',
      class: 'col-md-6 col-lg-3 col-xl-2',
      dialogComponent: SiteAreasDialogComponent,
      cleared: true,
      dependentFilters,
    };

    // Set
    this.setFilterDef(filterDef);
  }
}
