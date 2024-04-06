"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverMain = void 0;
const DataSource_1 = require("./DataSource");
const Spreadsheet_1 = require("./Spreadsheet");
const ObserverMain = () => {
    const dataSource = new DataSource_1.DataSource();
    const spreadsheet1 = new Spreadsheet_1.Spreadshit();
    const spreadsheet2 = new Spreadsheet_1.Spreadshit();
    dataSource.addObserver(spreadsheet1);
    dataSource.addObserver(spreadsheet2);
    dataSource.value = 5;
};
exports.ObserverMain = ObserverMain;
