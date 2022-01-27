import { CONNECTORS } from 'shared/model/charging-stations.model';
import { FilterDef, FilterType } from 'types/Filters';

import { BaseFilter } from './base-filter';

export class ConnectorTableFilter extends BaseFilter {
  public constructor() {
    super();
    // Define filter
    const filterDef: FilterDef = {
      id: 'connector',
      httpId: 'ConnectorID',
      type: FilterType.DROPDOWN,
      name: 'chargers.connector',
      class: 'col-md-6 col-lg-2 col-xl-2',
      label: '',
      items: Object.assign([], CONNECTORS),
      multiple: true,
      exhaustive: true
    };
    // Set
    this.setFilterDef(filterDef);
  }
}


