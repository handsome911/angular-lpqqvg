import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: 'Hydrogen (201)',  weight: '+380991005201', symbol: 'main (+380991005001)'},
  {position: 1, name: 'Helium (202)',    weight: '+380991005202', symbol: 'main (+380991005001)'},
  {position: 2, name: 'Lithium (305)',   weight: '+380991005305', symbol: 'sales (+380991005002)'},
  {position: 3, name: 'Beryllium (306)', weight: '+380991005306', symbol: 'sales (+380991005002)'},
  {position: 4, name: 'Boron',           weight: '',              symbol: ''},
  {position: 5, name: 'Carbon',          weight: '+380991005306', symbol: 'ERROR. SELECT BILLING'},
  {position: 6, name: 'Fluorine',        weight: '',              symbol: ''},
  {position: 7, name: 'Nitrogen (501)',  weight: '+380991007777',  symbol: 'logistics (+380999999999)'},
  {position: 8, name: 'Oxygen (502)',    weight: '+380991007778',  symbol: 'logistics (+380999999999)'},
  {position: 9, name: 'Neon',            weight: '',              symbol: ''},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample {
  displayedColumns: string[] = ['select', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */