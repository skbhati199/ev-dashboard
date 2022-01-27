import { FilterDef, FilterType } from 'types/Filters';

import { CompaniesDialogComponent } from '../../dialogs/companies/companies-dialog.component';
import { BaseFilter } from './base-filter';

export class CompanyTableFilter extends BaseFilter {
  public constructor(dependentFilters?: FilterDef[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'companies',
      httpId: 'CompanyID',
      type: FilterType.DIALOG_TABLE,
      defaultValue: '',
      label: '',
      multiple: true,
      name: 'companies.titles',
      class: 'col-md-6 col-lg-3 col-xl-2',
      dialogComponent: CompaniesDialogComponent,
      cleared: true,
      dependentFilters
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
