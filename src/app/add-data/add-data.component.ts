import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
addDataForm!:FormGroup
  constructor(private auth:AuthService ,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.tags()
    this.addDataForm = this.fb.group({
      tags: new FormControl('', [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      likes: new FormControl('', [Validators.required]),
      // fname: new FormControl('', [Validators.required]),

      // lname: new FormControl('', [Validators.required]),
      // picture: new FormControl('', [Validators.required]),
      // title: new FormControl('', [Validators.required]),
      // date: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    })
  }
  val:any
  submitForm(){
    console.log(this.addDataForm.value)

    const formData={
image:this.addDataForm.value.image,
likes:this.addDataForm.value.likes,
owner:"60d0fe4f5311236168a109d5",
// publishDate:this.addDataForm.value.date,
tags:this.addDataForm.value.tags,
text:this.addDataForm.value.text
    }
//     const data=[formData]
// const limit=20;
// const page=0;
// const total=873;
// const reqBody={data,limit,page,total}

      this.auth.addData(formData,`${'62907a7cc1fbfb9a270f4060'}`).subscribe({
        next: (res) => {
          this.val = res;
      console.log(res)
        }})


      }
  tagsData!:any

tags(){
  this.auth.tagsData(`${'62907a7cc1fbfb9a270f4060'}`).subscribe((data:any)=>{
    this.tagsData = data.data
    console.log(data.data)


  })
}




        }
