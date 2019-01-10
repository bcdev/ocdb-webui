/**
 * Dataset reference.
 */
import { ProductMode } from "../api/searchDatasets";

export interface DatasetRef {
    id: string;
    path: string;
}


export interface DatasetQuery {
    expr?: string;
    mtype: string;
    time?: string[];
    region?: string;
    pmode?: ProductMode;
    pname?: string[];
    pgroup?: string[];
    shallow: string;
    wdepth: string;
    offset?: number;
    count?: number;
}


export interface QueryResult {
    datasets: DatasetRef[];
    query: DatasetQuery;
    total_count: number;
}


export interface StoreInfo {
    products: Product[];
    productGroups: ProductGroup[];
}

export interface Product {
    name: string;
    units: string;
    description: string;
}

export interface ProductGroup {
    name: string;
    description: string;
}


export interface DatasetMetaData {
    intidentifier_product_doi: string;
    received: string;
    investigators: string;
    affiliations: string;
    contact: string;
    experiment: string;
    cruise: string;
    station: string;
    data_file_name: string;
    documents: string;
    calibration_files: string;
    instrument: string;
    data_type: string;
    data_status: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    north_latitude: string;
    south_latitude: string;
    east_longitude: string;
    west_longitude: string;
    water_depth: string;
    secchi_depth: string;
    cloud_percent: string;
    wind_speed: string;
    wave_height: string;
    missing: string;
    delimiter: string;
    units: string;
}

export function metaDatasetInit() {
    return {
        intidentifier_product_doi: '',
        received: '',
        investigators: '',
        affiliations: '',
        contact: '',
        experiment: '',
        cruise: '',
        station: '',
        data_file_name: '',
        documents: '',
        calibration_files: '',
        instrument: '',
        data_type: '',
        data_status: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        north_latitude: '',
        south_latitude: '',
        east_longitude: '',
        west_longitude: '',
        water_depth: '',
        secchi_depth: '',
        cloud_percent: '',
        wind_speed: '',
        wave_height: '',
        missing: '',
        delimiter: '',
        units: '',
    };
}

export interface Dataset {
    id: string;
    path: string;
    metadata: DatasetMetaData;
    records: number[][];
    longitudes: number[];
    latiudes: number[];
    attribures: string[];
    times: string[];
}


export const datasetInit = {
    id: '',
    path: '',
    metadata: metaDatasetInit(),
    records: [],
    longitudes: [],
    latiudes: [],
    attribures: [],
    times: [],
};

export interface SearchHistoryItem {
    name: string;
    searchPath: string;
}
