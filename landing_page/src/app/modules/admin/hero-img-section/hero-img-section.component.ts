import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-hero-img-section',
  templateUrl: './hero-img-section.component.html',
  styleUrls: ['./hero-img-section.component.css']
})
export class HeroImgSectionComponent implements OnInit {
  uploadForm!: FormGroup;
  file: any;


  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    private router: Router
  ) { }

  allImages: any[] = []

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      heroimage: null,
      name: ''
    });

    this.service.getHeroImage().subscribe((response: any) => {
      this.allImages = response

      console.log(this.allImages);
      
    });
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    const fileArray: File[] = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push(files[i]);
    }
    this.uploadForm.patchValue({
      heroimage: fileArray
    });
  }

  submit() {
    const formData = new FormData();
    formData.append('name', this.uploadForm.get("name")?.value);
    const heroimages = this.uploadForm.get('heroimage')?.value as File[];

    if (heroimages) {
      for (const image of heroimages) {
        formData.append('file', image);
      }
    }
    this.service.heroImageUpdate(formData).subscribe((response: any) => {
      console.log('Response:', response);

      if (response) {
        alert(response.message)
      }
      location.reload()
    });
  }


  delete(Imageid:string){
    this.service.deleteBanner(Imageid).subscribe((response:any)=>{
      console.log(response);
      
      if (response) {
        alert(response)
      }
      location.reload()
    })
  }


}
