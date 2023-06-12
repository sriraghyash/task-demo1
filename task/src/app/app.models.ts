import * as moment from "moment";




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


export function sortById(a:any,b:any){
    let result=0
    if((Number(a.id))>Number(b.id)) result= 1;
    else if(Number(a.id)<Number(b.id)) result= -1;
    return result;
}
export function sortByIdDesc(a:any,b:any){
    let result=0
    if((Number(a.id))>Number(b.id)) result= -1;
    else if(Number(a.id)<Number(b.id)) result= 1;
    return result;
}
export function sortByIccid(a:any,b:any){
    let result=0
    if(a.iccid>b.iccid) result= 1;
    else if(a.iccid<b.iccid) result= -1;
    return result;
}
export function sortByCarrier(a:any,b:any){
    let result=0
    if(a.carrier.toString().toLowerCase().charCodeAt(0)>b.carrier.toString().toLowerCase().charCodeAt(0)) result= 1;
    else if(a.carrier.toString().toLowerCase().charCodeAt(0)<b.carrier.toString().toLowerCase().charCodeAt(0)) result= -1;
    return result
}
export function sortByCarrierDesc(a:any,b:any){
    debugger
    let result=0
    if(a.carrier.toString().toLowerCase().charCodeAt(0)>b.carrier.toString().toLowerCase().charCodeAt(0)) result= -1;
    else if(a.carrier.toString().toLowerCase().charCodeAt(0)<b.carrier.toString().toLowerCase().charCodeAt(0)) result= 1;
    return result
}
export function sortByMsisdn(a:any,b:any){
    let result=0
    if(a.msisdn>b.msisdn) result= 1;
    else if(a.msisdn<b.msisdn) result= -1;
    return result;
}
export function sortByIdentity(a:any,b:any){
    let result=0
    if(a.identity>b.identity) result= 1;
    else if(a.identity<b.identity) result= -1;
    return result;
}
export function sortByDate(a:any,b:any){
    var startDate = moment( new Date(a.dateActivated), "DD.MM.YYYY");
    var endDate = moment( new Date(b.dateActivated), "DD.MM.YYYY");
    var diff = endDate.diff(startDate, 'days');
    let result=0
    if(diff>1) result= 1;
    else if(diff<1) result= -1;
    return result;
}
export function sortByDateDesc(a:any,b:any){
    var startDate = moment( new Date(a.dateActivated), "DD.MM.YYYY");
    var endDate = moment( new Date(b.dateActivated), "DD.MM.YYYY");
    var diff = endDate.diff(startDate, 'days');
    let result=0
    if(diff>1) result= -1;
    else if(diff<1) result= 1;
    return result;
}

