import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  depForm: FormGroup;

  constructor(private fb: FormBuilder ,private data: DatadepService, private router: Router) {
    let controls = {
      nom: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      etage: new FormControl(0, [
        Validators.required
      ]),
      salle: new FormControl(0, [
        Validators.required
      ])
    }

    this.depForm = this.fb.group(controls);
  }

  

  ajouter(){

    this.data.create(this.depForm.value)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your dep has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/departement/list'])
    
        }
      );

  }


  ngOnInit(): void {
  }

}
