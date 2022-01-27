import { FilterDef, FilterType } from 'types/Filters';

import { ChargingStationsDialogComponent } from '../../../shared/dialogs/charging-stations/charging-stations-dialog.component';
import { BaseFilter } from './base-filter';

export class ChargingStationTableFilter extends BaseFilter {
  public constructor(dependentFilters?: FilterDef[]) {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'charger',
      httpId: 'ChargingStationID',
      type: FilterType.DIALOG_TABLE,
      label: '',
      name: 'chargers.titles',
      class: 'col-md-6 col-lg-3 col-xl-2',
      dialogComponent: ChargingStationsDialogComponent,
      multiple: true,
      cleared: true,
      dependentFilters
    };
    // Set
    this.setFilterDef(filterDef);
  }
}
