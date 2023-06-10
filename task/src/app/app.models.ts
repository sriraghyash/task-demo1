export interface DataModel {
    carrier: string;
    dateActivated: Date | string;
    dateAdded: Date | string;
    dateModified: Date | string;
    hasDataUsage: boolean;
    hasVoiceUsage?:boolean;
    hasSmsUsage: boolean;
    iccid: number | string;
    msisdn?:number | string;
    id: number | string;
    identity: number | string;
    imei: number | string;
    imsi: number | string;
    imsis: Array<number | string>;
    inSession: boolean;
    locAddress: LocationAddress;
    locLat:number;
    locLng:number;
    meid:any;
    status:string;
    tags:Array<string>;
    terminalId:string;

}

export interface LocationAddress {
    streetNumber: number | string;
    street: string;
    city: string;
    state: string;
    zipCode: number | string;
    country: string;
}
