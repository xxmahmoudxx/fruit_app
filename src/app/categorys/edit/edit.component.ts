import { Component, OnInit } from '@angular/core';
import { CategorysService } from '../categorys.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorys } from '../categorys';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  CategorysForm: Categorys = {
    id: 0,
    name: '',
    description:'',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private categorysService: CategorysService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.categorysService.getById(id).subscribe((data) => {
      this.CategorysForm = data;
    });
  }
 
  update() {
    this.categorysService.update(this.CategorysForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categorys/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
