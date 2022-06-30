import { CentralServerService } from 'services/central-server.service';
import { MessageService } from 'services/message.service';
import { SpinnerService } from 'services/spinner.service';
import { BillingButtonAction } from 'types/Billing';
import { ActionResponse } from 'types/DataResult';
import { ButtonAction, ButtonActionColor } from 'types/GlobalType';
import { TableActionDef } from 'types/Table';
import { Utils } from 'utils/Utils';

import { TableAction } from '../../table-action';

export interface TableOnboardSubAccountActionDef extends TableActionDef {
  action: (id: string,
    centralServerService: CentralServerService,
    spinnerService: SpinnerService,
    messageService: MessageService) => void;
}

export class TableOnboardSubAccountAction implements TableAction {
  private action: TableActionDef = {
    id: BillingButtonAction.ONBOARD_SUBACCOUNT,
    type: 'button',
    color: ButtonActionColor.PRIMARY,
    icon: 'person_add',
    name: 'general.add',
    tooltip: 'general.tooltips.add',
    action: this.onboardSubAccount,
  };

  // Return an action
  public getActionDef(): TableActionDef {
    return this.action;
  }

  //Onboard the subaccount
  private onboardSubAccount(id: string,
    centralServerService: CentralServerService,
    spinnerService: SpinnerService,
    messageService: MessageService) {
    // execute onboarding operation here
    spinnerService.show();
    centralServerService.onboardSubAccount(id).subscribe((response) => {
      spinnerService.hide();
      if(response) {
        messageService.showSuccessMessage('settings.billing.stripe_subaccount.onboard_success');
      } else {
        Utils.handleError(JSON.stringify(response), messageService, 'settings.billing.stripe_subaccount.onboard_error');
      }
    }, (error) => {
      spinnerService.hide();
      Utils.handleError(JSON.stringify(error), messageService, 'settings.billing.stripe_subaccount.onboard_error');
    });
  }
}
