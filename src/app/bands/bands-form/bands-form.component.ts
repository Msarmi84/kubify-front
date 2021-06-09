
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Band } from 'src/app/models/band';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bands-form',
  templateUrl: './bands-form.component.html',
  styleUrls: ['./bands-form.component.scss']
})
export class BandsFormComponent implements OnInit {

  form: FormGroup;
  imgPreview = 'assets/images/img.jpg';
  imageFile: File;
  imageUrl = environment.baseUrl + 'images/';

  @Output() formSubmitted = new EventEmitter<FormData>();

  constructor(formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data?: Band) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    if (this.data?.name) {
      this.form.patchValue(this.data);
      this.imgPreview = this.data.img ? this.imageUrl + this.data.img : 'assets/images/img.jpg';
    }
  }

  onSubmit(): void {
    if (this.form.invalid || this.data.id) {
      return;
    }
    const formData = this.generateFormData();
    this.form.reset();
    this.imgPreview = 'assets/images/img.jpg';
    console.log(this.form);
    this.formSubmitted.emit(formData);
  }

  generateFormData(): FormData {
    const formData = new FormData();
    for (const field in this.form.value) {
      if (field) {
        formData.append(field, this.form.value[field]);
      }
    }
    formData.append('img', this.imageFile);
    return formData;
  }

  onImageChanged(event: InputEvent): void {
    const inputTarget = event.target as HTMLInputElement;
    const file = inputTarget.files[0];
    this.imageFile = file;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => this.imgPreview = fileReader.result as string;
  }



}
