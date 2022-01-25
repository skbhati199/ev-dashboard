import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentralServerService } from 'services/central-server.service';
import { SpinnerService } from 'services/spinner.service';

import { WindowService } from '../../services/window.service';
import { AbstractTabComponent } from '../../shared/component/abstract-tab/abstract-tab.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent extends AbstractTabComponent {
  public siteAreas = [];

  public constructor(
    activatedRoute: ActivatedRoute,
    windowService: WindowService,
    centralServerService: CentralServerService,
    spinnerService: SpinnerService,
  ) {
    super(activatedRoute, windowService, [], false);
    centralServerService.getSiteAreas().subscribe((siteAreas) => {
      this.siteAreas = siteAreas.result.map(siteArea => ({ id: siteArea.id, name: siteArea.name }));
      super.setHashArray(['all', ...this.siteAreas.map(siteArea => siteArea.id)]);
      super.enableRoutingSynchronization();
      spinnerService.hide();
    });
  }
}
