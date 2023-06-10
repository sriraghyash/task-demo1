import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';
import { DataModel, sortByCarrier, sortByIccid, sortById, sortByIdentity, sortByMsisdn } from '../app.models';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  public listData:any[] =[];
  public data:DataModel[]=[];
  public totalPages=0;
  public currentPage=1;
  public nextPage=0;
  public displayPerPage=5;
  public currentData:DataModel[]=[];
  public subsScriptions:Subscription[]=[];
  public sortBy:any;
  public noOfPages=0;
  public currentPage1:any;
  public currentPage2:any;
  public currentPage3:any =-1;

  constructor(private appService:AppServiceService){

  }

  public ngOnInit(): void {
    this.initializeData();
  }

  public initializeData():void{
    this.subsScriptions.push(this.appService.getListData().subscribe(x=>{
      this.data=x;
      this.assignPageData();
    }));
  }
  
  public calculatePageNumber():void{
    this.noOfPages = Math.ceil(this.data?.length/this.displayPerPage);
  }
  public assignPageData():void{
    this.currentData=[]
    Object.assign(this.currentData , this.data.slice(0,this.displayPerPage));
    this.calculatePageNumber();
    this.calculateCurrentPages();
    this.displayDataPerPageNumber();
  }

  calculateCurrentPages():void{
    if(this.currentPage3<this.currentPage){
    this.currentPage1 = this.currentPage;
    this.currentPage2= this.currentPage+1;
    this.currentPage3 = this.currentPage+2;
    } else if(this.currentPage1>this.currentPage){
      this.currentPage1 = this.currentPage;
      this.currentPage2= this.currentPage+1;
      this.currentPage3 = this.currentPage+2;
    }
  }

  public displayDataPerPageNumber():void{
    this.currentData=[]
    if(this.currentPage)
    Object.assign(this.currentData,this.data.slice((this.currentPage-1)*(this.displayPerPage-1), (this.currentPage-1)*(this.displayPerPage-1)+this.displayPerPage))
  }

  public nextPageNavigate():void{
    this.currentPage++;
    this.displayDataPerPageNumber();
  }
  public previousPage():void{
    this.currentPage--;
    this.displayDataPerPageNumber();
  }

  public carrierIcon(carrierName:string):string{
    let iconLink="";
    switch(carrierName){
      case 'vodafone' :iconLink="data:image/png;base64,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";
      break;
      case 'airtel': iconLink="https://play-lh.googleusercontent.com/uFg3zOsnGZkIrswmvXyFYhoF3gC4tv0ovFZv0zisJFQ2DZqJyh9SUGrK6D-Tnn1lGqc";
      break;
      case 'idea': iconLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyr5CXpDFxgcUaHPUl-H-GKYoUD-Uf38t7g&usqp=CAU";
      break;
      case 'jio': iconLink="data:image/png;base64,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";
      break;
      case 'tata docomo': iconLink="data:image/jpeg;base64,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";
      break;
      default : iconLink="";

    }
    return iconLink;
  }

  public optionsPerPage(event:any):void{
    this.displayPerPage= Number(event);
    this.assignPageData();
  }

  public ngOnDestroy():void{
    this.subsScriptions.forEach(subscription=>{
      subscription.unsubscribe();
    })
  }

  public sortDataBy(event:string):void{
    switch(event){
      case 'carrier':  this.data =this.data.sort(sortByCarrier);
      break;
      case 'iccid': this.data = this.data.sort(sortByIccid);
      break;
      case 'msisdn': this.data = this.data.sort(sortByMsisdn);
      break;
      case 'id': this.data = this.data.sort(sortById);
      break;
      case 'identity': this.data = this.data.sort(sortByIdentity);
      break;
    }
    this.displayDataPerPageNumber();
  }

  public navigateFirst(page?:number):void{
    this.currentPage=1;
    this.assignPageData();
  }
  public navigateNext(page?:number):void{
    this.currentPage++;
    this.assignPageData();
  }
  public navigatePrevious(page?:number):void{
    this.currentPage--;
    this.assignPageData();
  }
  public navigateLast(page?:number):void{
    this.currentPage = this.noOfPages;
    this.assignPageData();
  }

  public setCurrentPage(page:number):void{
    this.currentPage=page;
    this.assignPageData();
  }
   
 
  public loadRecord(i:number):void{

  }
}
