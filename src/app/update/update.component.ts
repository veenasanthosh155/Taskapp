import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(public editapi:ApicallService,public postapi:ApicallService,public router:ActivatedRoute,public route:Router){}
  data1={'task_name':'',
  'task_desc':'',
  'completed_status':'',
  'date_added':'',
  }
id:any;
ngOnInit()
{
this.id=this.router.snapshot.paramMap.get('id')
console.log(this.id)
// if(this.id){
  this.editapi.gettaskbyid(this.id).subscribe((res)=>
  {
    console.log(res);
    this.data1=res;
  })
// }
}
onsubmit()
{
  // if(this.id)
  // {
    this.postapi.updatetaskbyid(this.id,this.data1).subscribe((res)=>
    {
      this.route.navigate(['']);
    })
  // }
  // else{
  // console.log(this.data);
  // this.postapi.posttasks(this.data1).subscribe((res)=>{
  //   this.route.navigate(['']);
  // })
// }
}
}
