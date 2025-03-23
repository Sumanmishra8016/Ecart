import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  isSidePanelVisible: boolean= false ;
  productObj: any =
    {
      "productId": 0,
      "productSku": "",
      "productName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 2147483647,
      "productImageUrl": "",
      "userId": 0
    }


  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel(){
    this.isSidePanelVisible = false;
  }
}
