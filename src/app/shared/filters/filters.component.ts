import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormField } from "@angular/material/form-field";
import { MatDatetimepickerInputEvent } from "@mat-datetimepicker/core";
import { TranslateService } from "@ngx-translate/core";
import * as moment from "moment";
import { DaterangepickerDirective } from "ngx-daterangepicker-material";
import { takeWhile } from "rxjs/operators";
import { FilterDef, FilterType } from "types/Filters";
import { Utils } from "utils/Utils";

@Component({
  selector: 'app-filter',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {

  private alive: boolean;

  @ViewChild('searchInput') public searchInput!: ElementRef;
  @ViewChildren('ngxDatePickerElement') public datePickerElements!: QueryList<MatFormField>;
  @ViewChildren(DaterangepickerDirective) public datePickers: QueryList<DaterangepickerDirective>;

  public searchPlaceholder = '';
  public filtersDef: FilterDef[];

  public constructor(
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {
    this.searchPlaceholder = this.translateService.instant('general.search');
  }

  public resetDialogTableFilter(filterDef: FilterDef) {
    let filterIsChanged = false;
    if (filterDef.multiple) {
      if (!Utils.isEmptyArray(filterDef.currentValue)) {
        filterDef.currentValue = [];
        filterIsChanged = true;
      }
      filterDef.cleared = true;
    } else {
      if (filterDef.currentValue) {
        filterDef.currentValue = null;
        filterIsChanged = true;
      }
    }
    if (filterIsChanged) {
      this.filterChanged(filterDef);
    }
  }

  public showDialogTableFilter(filterDef: FilterDef) {
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

  public dateFilterChanged(filterDef: FilterDef, event: MatDatetimepickerInputEvent<any>) {
    // Date?
    if (filterDef.type === FilterType.DATE) {
      filterDef.currentValue = event.value ? event.value.toDate() : null;
    }
    // Update filter
    this.filterChanged(filterDef);
  }

  public dateRangeChanged(filterDef: FilterDef, event: any) {
    const currentValue = filterDef.currentValue;
    if (currentValue?.startDate !== event.startDate || currentValue?.endDate !== event.endDate) {
      filterDef.currentValue = {
        startDate: event?.startDate.toDate(),
        endDate: event?.endDate.toDate()
      };
      for (let picker of this.datePickers) {
        picker.picker.updateCalendars();
      }
      this.filterChanged(filterDef);
    }
  }

  public dateRangeChangedDirectly(filterDef: FilterDef, event: any) {
    const splitRangeValue = event.target.value.split(' - ');
    this.dateRangeChanged(filterDef, {
      startDate: moment(splitRangeValue[0], filterDef.dateRangeTableFilterDef.locale.displayFormat),
      endDate: moment(splitRangeValue[1], filterDef.dateRangeTableFilterDef.locale.displayFormat)
    });
  }

  public setDateRangeToLatest(filterDef: FilterDef) {
    const startDate = moment(filterDef.currentValue.startDate);
    const endDate = moment();
    this.dateRangeChanged(filterDef, {
      startDate,
      endDate
    });
  }

  public openDateRanges(parent: MatFormField) {
    const parentHTMLElement = (parent.getConnectedOverlayOrigin().nativeElement as HTMLElement);
    for (const picker of this.datePickers) {
      // Close any other open pickers
      if (parentHTMLElement.contains(picker.picker.pickerContainer.nativeElement as HTMLElement)) {
        picker.toggle();
      } else {
        picker.hide();
      }
    }
  }

  public resetSearchFilter(){
    this.searchInput.nativeElement.value = '';
    // this.dataSource.setSearchValue('');
  }

  public filterChanged(filterDef: FilterDef) {
    // Do something here!!
  }
}
