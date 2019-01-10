import * as React from 'react';
import { mount, ReactWrapper } from "enzyme";
import { newDataTableState } from "../../states/dataTableState";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import Paper from "@material-ui/core/Paper/Paper";

import DataTable from "./DataTable";
import MetaInfoDialog from "./MetaInfoDialog";
import { Dataset, DatasetRef, QueryResult } from "../../types/dataset";
import * as renderer from "react-test-renderer";
import { Table } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";


interface MockDataTableProps {
    data: QueryResult;
    page: number;
    rowsPerPage: number;
    searchDatasets: () => void;
    updateDataPage: (page: number) => void;
    updateDataRowsPerPage: (rowsPerPage: number) => void;

    metaInfoDialogOpen: boolean;
    openMetaInfoDialog: () => void;
    closeMetaInfoDialog: () => void;

    updateDataset: (datasetId: string) => void;
    dataset: Dataset;

    downloadDocs: boolean;
    updateDownloadDocs: (downloadDocs: boolean) => void;
}

const datasetEmpty: DatasetRef[] = [];
const datasetNotEmpty: DatasetRef[] = [
    {
        id: 'tt1',
        path: 'path1'
    },
    {
        id: 'tt2',
        path: 'path2'
    },
];

const dataEmpty = {
    datasets: datasetEmpty,
    query: {
        mtype: '',
        shallow: '',
        wdepth: '',
    },
    total_count: 0,
    locations: new Map<string, string>(),
};


const dataNotEmpty = {
    ...dataEmpty,
    datasets: datasetNotEmpty,
};


const mockProps: MockDataTableProps = {
    ...newDataTableState(),
    data: dataEmpty,
    searchDatasets: () => null,
    updateDataPage: () => null,
    updateDataRowsPerPage: () => null,

    metaInfoDialogOpen: false,
    openMetaInfoDialog: () => null,
    closeMetaInfoDialog: () => null,

    updateDataset: () => null,

    downloadDocs: false,
    updateDownloadDocs: () => null,
};


describe("DataTable", () => {
    let propsEmptyData: MockDataTableProps;
    let propsNotEmptyData: MockDataTableProps;

    // @ts-ignore
    let mountedComponent: ReactWrapper<MockDataTableProps, undefined, DataTable> | undefined;

    const appScreen = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <DataTable {...propsEmptyData} />
            );
        }

        return mountedComponent;
    };

    beforeEach(() => {
        propsEmptyData = {...mockProps};
        propsNotEmptyData = {...mockProps, data: dataNotEmpty};

        mountedComponent = undefined;
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <DataTable {...propsNotEmptyData} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly empty table', () => {
        const tree = renderer.create(
            <DataTable {...propsEmptyData} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    it('Table has Table', () => {
        expect(appScreen().find(Table).length).toBe(1);
    });

    it('Table has TableHead', () => {
        expect(appScreen().find(TableHead).length).toBe(1);
    });

    it('Table has TableFooter', () => {
        expect(appScreen().find(TableFooter).length).toBe(1);
    });

    it("MetaInfoDialog is rendered", () => {
        expect(appScreen().find(MetaInfoDialog).length).toBe(1);
    });

    it("TablePagination is rendered", () => {
        expect(appScreen().find(TablePagination).length).toBe(1);
    });

    it("Paper is rendered", () => {
        expect(appScreen().find(Paper).length).toBe(1);
    });

    it('Table has download Button', () => {
        expect(appScreen().find("#datatable-button-download").length).toBeGreaterThan(0);
    });

    it("Download button is disabled due to empty table", () => {
        expect(appScreen().find("#datatable-button-download").first().is('[disabled]')).toBe(true);
    });

    it("Download button is ensabled when table is not empty", () => {
        const mountedComponent = mount(<DataTable {...propsNotEmptyData} />);
        expect(mountedComponent.find("#datatable-button-download").first().is('[disabled]')).toBe(false);
    });
});