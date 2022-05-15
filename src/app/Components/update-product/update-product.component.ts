import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  updateddoudct: IProduct={} as IProduct;
  catList: ICategory[]=[];
  constructor(private cateServ:CategoryService,private prodServ:ProductService , private router:Router) { 
  }

  ngOnInit(): void {
    this.cateServ.getAllCateogories().subscribe(categoryList=>{
      this.catList=categoryList;
    })
  }
  onFileChange(event:any) {
  const reader = new FileReader();
    console.log(reader);
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.updateddoudct.image = reader.result as string;
      };
    }
  }
  UpdateProduct(id:number)
  {
    console.log(this.updateddoudct);
    this.prodServ.UpdateProduct(id,this.updateddoudct).subscribe(prd=>{
      // this.router.navigate(['']);
      // console.log(this.newPrdoudct);
    });
  }
}