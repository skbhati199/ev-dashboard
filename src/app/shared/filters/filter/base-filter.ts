import { FilterDef } from "types/Filters";

export abstract class BaseFilter {
  private filterDef!: FilterDef;

  public getFilterDef(): FilterDef {
    return this.filterDef;
  }

  public setFilterDef(filterDef: FilterDef) {
    if (!filterDef.reset) {
      if (filterDef.multiple) {
        filterDef.reset = () => {
          filterDef.currentValue = [];
          if (filterDef.defaultValue) {
            filterDef.currentValue.push(filterDef.defaultValue);
          }
        };
      } else {
        filterDef.reset = () => filterDef.currentValue = filterDef.defaultValue ? filterDef.defaultValue : null;
      }
    }
    filterDef.reset();
    this.filterDef = filterDef;
  }
}
