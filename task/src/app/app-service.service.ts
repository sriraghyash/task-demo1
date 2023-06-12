import { Injectable } from '@angular/core';
import { Observable ,of,BehaviorSubject } from 'rxjs';
import { DataModel } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public currentPage:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public listData:DataModel[] =[
    {
      "carrier": "Vodafone",
      "dateActivated": "2020-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "01",
      "id": "01",
      "identity": "ICCID: 89000000000000001281",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0129a9A"		
    },
    {
      "carrier": "airtel",
      "dateActivated": "2019-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "12",
      "id": "12",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B012929A"		
    },
    {
      "carrier": "jio",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "23",
      "id": "23",
      "identity": "ICCID: 89000000000000001220",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B01a9D9A"		
    },
    {
      "carrier": "Vodafone",
      "dateActivated": "2007-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "304",
      "id": "304",
      "identity": "ICCID: 890000000001000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0A29D9A"		
    },
    {
      "carrier": "idea",
      "dateActivated": "2006-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "34",
      "id": "34",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B1129D9A"		
    },
    {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "45",
      "id": "45",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B2129D9A"		
    },

    {
      "carrier": "jio",
      "dateActivated": "2005-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "56",
      "id": "56",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B3129D9A"		
    },
    {
      "carrier": "tata docomo",
      "dateActivated": "2004-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "67",
      "id": "67",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B8129D9A"		
    },
    {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "78",
      "id": "78",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B9129D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "89",
      "id": "89",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0189D9A"		
    }
    ,  {
      "carrier": "jio",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "910",
      "id": "910",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B013429D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "1011",
      "id": "1011",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0129D9A"		
    },
    {
      "carrier": "airtel",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "1112",
      "id": "1112",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B1129D9A"		
    }
    ,  {
      "carrier": "Airtel",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "1213",
      "id": "1321",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B6129D9A"		
    },
    {
      "carrier": "idea",
      "dateActivated": "2003-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "1415",
      "id": " 1415",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B5129D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "2012",
      "id": "2021",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0929D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "4041",
      "id": "4041",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0129C9A"		
    }
    ,  {
      "carrier": "idea",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "2223",
      "id": "2221",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0127D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "2425",
      "id": "2425",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0189D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "2829",
      "id": "2829",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0128D9A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "3031",
      "id": "3031",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0129D8A"		
    }
    ,  {
      "carrier": "Vodafone",
      "dateActivated": "2021-07-08T15:14:05Z",  
      "dateAdded": "2014-08-25T10:49:14Z",
      "dateModified": "2021-09-17T13:57:27Z",
      "hasDataUsage": true,
      "hasSmsUsage": true,
      "hasVoiceUsage": true,
      "iccid": "3233",
      "id": "3233",
      "identity": "ICCID: 89000000000000001280",
      "imei": "300000000000008",
      "imsi": "310000000000008",
      "imsis": [
        "310000000000008"
      ],
      "inSession": true,
      "locAddress": {
        "streetNumber": "5300",
        "street": "Brokensound BLVD NW",
        "city": "Boca Raton",
        "state": "Florida",
        "zipCode": "33487",
        "country": "US"
      },
      "locLat": 26.3951167,
      "locLng": -80.1146146,
      "meid": null,
      "msisdn": "5555555551",
      "status": "activated",
      "tags": [
        "has_imei",
        "has_imsi",
        "has_iccid",
        "has_msisdn"
      ],
      "terminalId": "B0129F9A"		
    }
    
  ]
  constructor() { }

  public getListData():Observable<any>{
    return of(this.listData);
  }
  public setCurrentPage(page:any):void{
    this.currentPage.next(page);
  }
}
