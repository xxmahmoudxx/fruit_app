import { Component, OnInit } from '@angular/core';
import { Categorys } from '../categorys';
import { CategorysService } from '../categorys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  CategoryForm: Categorys = {
    id: 0,
    name: '',
    description:'',
  };
  
 
  constructor(private Categoryservice: CategorysService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.Categoryservice.create(this.CategoryForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categorys/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}