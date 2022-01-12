import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component {

  @Input() public flag: boolean = false;
  options = [
    { id: 1, select: false, name: 'כסף בעו"ש', src:"../assets/images/img1.jpg",tmp:0 },
    { id: 2, select: false, name: 'מטבע דיגיטלי', src:"../assets/images/img2.jpg" ,tmp:0},
    { id: 3, select: false, name: 'תיק מניות', src:"../assets/images/img3.jpg",tmp:0},
    { id: 4, select: false, name: 'קרן השתלמות', src:"../assets/images/img4.jpg" ,tmp:0},
    { id: 5, select: false, name: 'קופת גמל ', src:"../assets/images/img5.jpg" ,tmp:0},
    { id: 6, select: false, name: 'חיסכון בבנק', src:"../assets/images/img6.jpg" ,tmp:0},
    { id: 7, select: false, name: 'מטבע חוץ' , src:"../assets/images/img7.jpg",tmp:0},
    { id: 8, select: false, name: 'אין לי' , src:"../assets/images/img8.jpg",tmp:0},

  ];
  constructor(
     private router: Router,
  ) { }
   
   send(){

        alert("מצוין!")
     
    this.router.navigateByUrl('/question4');
   }
   select( id:number){
         this.options =this.options.map((d) => {
        if (d.id == id) {
        d.select = !d.select;
        } 
        if(d.select){

          d.tmp=1;
        }else{
          d.tmp=0;
        }
    return d;
    });
    this.flag = this.options.some(e => e.tmp>0);
    console.log(this.options);
   }
   removeAll(){
    this.options =this.options.map((d) => {
         d.select = false;
         d.tmp=0;
         this.flag = false;
    return d;
    });
   }
   back(){
    this.router.navigateByUrl('/question');
   }
   
}
