import { AuthorizationService } from 'services/authorization.service';
import { CentralServerService } from 'services/central-server.service';
import { Action, Entity } from 'types/Authorization';
import { CardTypes } from 'types/Dashboard';
import { FilterParams } from 'types/GlobalType';

import { NumberCardBaseComponent } from './number-card-base.component';

export class ChargingStationErrorCardComponent extends NumberCardBaseComponent {

  public constructor(
    centralServerService: CentralServerService,
    authorizationService: AuthorizationService,
    filterParams: FilterParams = {}
  ){
    super();
    if (authorizationService.canAccess(Entity.CHARGING_STATION, Action.LIST)){
      centralServerService.getChargingStationsInError(filterParams).subscribe((chargers) => {
        let cardType: CardTypes;
        if (chargers.count > 0) {
          cardType = CardTypes.DANGER;
        } else if (chargers.count === 0) {
          cardType = CardTypes.SUCCESS;
        }
        super.setDetails({
          display: true,
          title: 'Charging stations in error',
          description: chargers.count.toString(),
          icon: 'ev_station',
          type: cardType,
          details: chargers.result
        });
      }, (error) => {
        super.setDetails({
          display: false,
          title: 'Charging stations in error',
          description:  'err',
          icon:  'ev_station',
          type:  CardTypes.PRIMARY,
          details: []
        });
      });
    }
  }
}
