import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {

  clientForm: FormGroup;
  
  myPhoto: any;
  
  constructor(private fb: FormBuilder ,private data: DataclientService, private router: Router) {
    let controls = {
      nom: new FormControl('', [
        Validators.required
      ]),
      prenom: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      cin: new FormControl(0, [
        Validators.required
      ]),
      tel: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ])
    }

    this.clientForm = this.fb.group(controls);
   }

  ngOnInit(): void {
  }

  selectionnerImage(e:any){
    
    this.myPhoto = e.target.files[0];

  }

  ajouter(){
    let formdata = new FormData();
    formdata.append('nom' , this.clientForm.value.nom);
    formdata.append('prenom' , this.clientForm.value.prenom);
    formdata.append('email' , this.clientForm.value.email);
    formdata.append('tel' , this.clientForm.value.tel);
    formdata.append('cin' , this.clientForm.value.cin);
    formdata.append('image' , this.myPhoto);

    this.data.create(formdata)
      .subscribe(
        res=>{
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your client has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/client'])

        }
      );

  }

}
