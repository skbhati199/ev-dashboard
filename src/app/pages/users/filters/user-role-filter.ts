import { BaseFilter } from 'shared/filters/filter/base-filter';
import { FilterDef, FilterType } from 'types/Filters';

import { CentralServerService } from '../../../services/central-server.service';
import { UserRoles } from '../../../shared/model/users.model';

export class UserRoleFilter extends BaseFilter {
  public constructor(
    private centralServerService: CentralServerService) {
    super();
    const items = UserRoles.getAvailableRoles(this.centralServerService.getLoggedUser().role);
    // Define filter
    const filterDef: FilterDef = {
      id: 'role',
      httpId: 'Role',
      type: FilterType.DROPDOWN,
      name: 'users.roles',
      class: 'col-md-6 col-lg-4 col-xl-2',
      label: '',
      currentValue: [],
      items: items ? items : undefined,
      multiple: true,
    };
    this.setFilterDef(filterDef);
  }
}
