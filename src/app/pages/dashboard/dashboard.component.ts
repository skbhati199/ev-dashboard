import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { takeWhile } from 'rxjs/operators';
import { SpinnerService } from 'services/spinner.service';

import { IssuerFilter } from '../../shared/table/filters/issuer-filter';
import { SiteAreaTableFilter } from '../../shared/table/filters/site-area-table-filter';
import { SiteTableFilter } from '../../shared/table/filters/site-table-filter';
import { FilterType } from '../../types/Table';
import { TableFilterDef } from '../../types/Table';
import { Utils } from '../../utils/Utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {

  private alive: boolean;

  public tableFiltersDef: TableFilterDef[];

  public readonly FilterType = FilterType;

  public constructor(
    private spinnerService: SpinnerService,
    private dialog: MatDialog
  ) {
    this.initFiltersDef();
    this.spinnerService.hide();
  }

  public initFiltersDef(): void {
    const issuerFilter = new IssuerFilter().getFilterDef();
    const siteFilter = new SiteTableFilter([issuerFilter]).getFilterDef();
    const siteAreaFilter = new SiteAreaTableFilter([issuerFilter, siteFilter]).getFilterDef();
    this.tableFiltersDef = [
      issuerFilter,
      siteFilter,
      siteAreaFilter
    ];
  }

  public showDialogTableFilter(filterDef: TableFilterDef) {
    // Disable outside click close
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // Init button title
    dialogConfig.data = {
      validateButtonTitle: 'general.set_filter',
    };
    Utils.buildDependentFilters(filterDef);
    if (filterDef.dialogComponentData) {
      Object.assign(dialogConfig.data, filterDef.dialogComponentData);
    }
    if (filterDef.cleared) {
      dialogConfig.data.cleared = true;
      filterDef.cleared = false;
    }
    // Render the Dialog Container transparent
    dialogConfig.panelClass = 'transparent-dialog-container';
    // Show
    const dialogRef = this.dialog.open(filterDef.dialogComponent, dialogConfig);
    // Add sites
    dialogRef.afterClosed().pipe(takeWhile(() => this.alive)).subscribe((data) => {
      if (data) {
        filterDef.currentValue = data;
        this.filterChanged(filterDef);
      }
    });
  }

  public filterChanged(filterDef: TableFilterDef) {

  }

}
