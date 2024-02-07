import { Component, OnInit } from '@angular/core';
import { Categorys } from '../categorys';
import { CategorysService } from '../categorys.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCategorys: Categorys[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  


 
  constructor(private categorysService: CategorysService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.categorysService.get().subscribe((data) => {
      this.allCategorys = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.categorysService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCategorys = this.allCategorys.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}