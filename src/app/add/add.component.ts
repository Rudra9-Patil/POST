import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userData:any;
  updateForm: any;
  id: any;
 
  constructor(private service: AuthService,private router:Router,private fb:FormBuilder) {
    this.getMydata();
  }




  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator; 
  }
   ngOnInit(): void {
   
    this.updateForm = this.fb.group({
      tags: new FormControl('', [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      likes: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    })
    
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

  OnEdit(user: any) {
    console.log(user);
    this.id = user.id;
   this.updateForm.patchValue({
    text : user.text,
    image : user.image,
    tags :user.tags,
    likes : user.likes
   })
    // this.router.navigate(['add']);
  }
  delete(id:any){

  }
  onUpdate() {
    this.service.updatePost(this.id,this.updateForm.value).subscribe(val=> {
      console.log(val);
      this.getMydata()
      this.updateForm.reset()
      const btnVal=document.getElementById('cls')
      btnVal?.click()
    }, err => {
      console.log(err);
    })

  }

  onDelete(id: any) {
    console.log(id);
    this.service.deletePost(id).subscribe(val => {
      this.getMydata();
    })
  }
}


