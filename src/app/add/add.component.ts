import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userData:any
  constructor(private service: AuthService,private router:Router) {}
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  ngAfterViewInit() {
  //  this.userData.paginator=this.paginator

  }
   ngOnInit(): void {
    this.getMydata()
  }

  getMydata() {
    this.service
      .getData(`${'62907a7cc1fbfb9a270f4060'}`)
      .subscribe((data: any) => {
        this.userData = data.data;
        console.log(data);
      });
  }
  addData(){
this.router.navigate(['add'])
  }
  delete(id:any){

  }
}
