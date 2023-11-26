import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commertial-projects',
  templateUrl: './commertial-projects.component.html',
  styleUrls: ['./commertial-projects.component.css']
})
export class CommertialProjectsComponent implements OnInit {

  uploadForm!: FormGroup;
  file: any;


  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    private router: Router
  ) { }

  allDatas: any[] = []

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      residentiialImage: null,
      category: '',
      hedding: '',
      description: '',
    });

    this.service.GetRsidentialImages().subscribe((response: any) => {
      this.allDatas = response
    });
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    const fileArray: File[] = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push(files[i]);
    }

    console.log(fileArray);

    this.uploadForm.patchValue({
      residentiialImage: fileArray
    });
  }

  submit() {
    const formData = new FormData();
    formData.append('category', this.uploadForm.get("category")?.value);
    formData.append('hedding', this.uploadForm.get("hedding")?.value);
    formData.append('description', this.uploadForm.get("description")?.value);
    const residentiialImages = this.uploadForm.get('residentiialImage')?.value as File[];


    if (residentiialImages) {
      for (const image of residentiialImages) {
        formData.append('file', image);
      }
    }
    console.log(residentiialImages,'hero images');

    this.service.RsidentialImagesUpdate(formData).subscribe((response: any) => {
      console.log('Residential image Response:', response);
    });
  }

  delete(Imageid:string){
    this.service.DeleteProjectsImage(Imageid).subscribe((response:any)=>{
      console.log(response);
      
      if (response) {
        alert(response)
      }
      location.reload()
    })
  }

}
