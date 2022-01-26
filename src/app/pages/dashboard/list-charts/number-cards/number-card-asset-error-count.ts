import { AuthorizationService } from 'services/authorization.service';
import { CentralServerService } from 'services/central-server.service';
import { Action, Entity } from 'types/Authorization';
import { CardTypes } from 'types/Dashboard';
import { FilterParams } from 'types/GlobalType';

import { NumberCardBaseComponent } from './number-card-base.component';

export class AssetErrorCardComponent extends NumberCardBaseComponent {

  public constructor(
    centralServerService: CentralServerService,
    authorizationService: AuthorizationService,
    filterParams: FilterParams = {}
  ){
    super();
    if (authorizationService.canAccess(Entity.ASSET, Action.LIST)){
      centralServerService.getAssetsInError(filterParams).subscribe((assets) => {
        let cardType: CardTypes;
        if (assets.count > 0) {
          cardType = CardTypes.DANGER;
        } else if (assets.count === 0) {
          cardType = CardTypes.SUCCESS;
        }
        super.setDetails({
          display: true,
          title: 'Assets in error',
          description: assets.count.toString(),
          icon: 'account_balance',
          type: cardType,
          details: assets.result
        });
      }, (error) => {
        super.setDetails({
          display: false,
          title: 'Assets in error',
          description:  'err',
          icon:  'account_balance',
          type:  CardTypes.PRIMARY,
          details: []
        });
      });
    }
  }
}
