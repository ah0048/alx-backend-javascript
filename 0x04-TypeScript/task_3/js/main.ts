/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const rowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
}

CRUD.updateRow(rowID, updateRow);
CRUD.deleteRow(rowID);
