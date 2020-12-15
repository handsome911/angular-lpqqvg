import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  number: string;
  trunk: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 0, name: 'Hydrogen (201)',  number: '+380991005201', trunk: 'main (+380991005001)'},
  {position: 1, name: 'Helium (202)',    number: '+380991005202', trunk: 'main (+380991005001)'},
  {position: 2, name: 'Lithium (305)',   number: '+380991005305', trunk: 'sales (+380991005002)'},
  {position: 3, name: 'Beryllium (306)', number: '+380991005306', trunk: 'sales (+380991005002)'},
  {position: 4, name: 'Boron',           number: '',              trunk: ''},
  {position: 5, name: 'Carbon',          number: '+380991005306', trunk: 'ERROR. SELECT BILLING'},
  {position: 6, name: 'Fluorine',        number: '',              trunk: ''},
  {position: 7, name: 'Nitrogen (501)',  number: '+380991007777', trunk: 'logistics (+380999999999)'},
  {position: 8, name: 'Oxygen (502)',    number: '+380991007778', trunk: 'logistics (+380999999999)'},
  {position: 9, name: 'Neon',            number: '',              trunk: ''},
  {position: 10, name: 'Иванов (701)',   number: '',              trunk: ''},
  {position: 10, name: 'Иванов (702)',   number: '',              trunk: ''},
  {position: 10, name: 'Иванов (703)',   number: '',              trunk: ''},
  {position: 10, name: 'кухня (810)',    number: '',              trunk: ''},
  {position: 10, name: 'охрана (811)',   number: '',              trunk: ''},
  {position: 10, name: 'склад (822)',    number: '',              trunk: ''},
];

export interface TrunkElement {
  position: number;
  trunkName: string;
  trunkNumber: string;
}


const ELEMENT_DATA_SIP: TrunkElement[] = [
  {position: 0, trunkName: 'main',       trunkNumber: '+380991005001'},
  {position: 1, trunkName: 'sales',      trunkNumber: '+380991005002'},
  {position: 2, trunkName: 'logistics',  trunkNumber: '+380999999999'},
  {position: 3, trunkName: '',           trunkNumber: '+380990007034'},
  {position: 4, trunkName: '',           trunkNumber: '+380990007035'},
  {position: 5, trunkName: '',           trunkNumber: '+380990007036'},
  {position: 6, trunkName: '',           trunkNumber: '+380990007037'},
  {position: 7, trunkName: '',           trunkNumber: '+380990007038'},
  {position: 8, trunkName: '',           trunkNumber: '+380990007039'},
  {position: 9, trunkName: '',           trunkNumber: '+380990007030'},
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

  hide = true;

  displayedColumns: string[] = ['select', 'user', 'number', 'trunk'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  displayedColumnsSip: string[] = ['select', 'trunkName', 'trunkNumber'];
  dataSourceSip = new MatTableDataSource<TrunkElement>(ELEMENT_DATA_SIP);
  selectionSip = new SelectionModel<TrunkElement>(true, []);
  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isAllSelectedSip() {
    const numSelected = this.selectionSip.selected.length;
    const numRows = this.dataSourceSip.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  masterToggleSip() {
    this.isAllSelectedSip() ?
        this.selectionSip.clear() :
        this.dataSourceSip.data.forEach(row => this.selectionSip.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  checkboxLabelSip(row?: TrunkElement): string {
    if (!row) {
      return `${this.isAllSelectedSip() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionSip.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */