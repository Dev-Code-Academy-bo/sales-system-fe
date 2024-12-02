import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { CommonModule } from '@angular/common';
import { BorderComponent } from "../../../../shared/border/border.component";
import { TitleComponent } from '../../../../shared/title/title.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule, BorderComponent,TitleComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  productForm: FormGroup<any>;

  constructor(private fb: FormBuilder) {
    
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      image:       ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      salePrice: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form submitted:', this.productForm.value);
    }
  }

  saveForm() {
    
    }
}