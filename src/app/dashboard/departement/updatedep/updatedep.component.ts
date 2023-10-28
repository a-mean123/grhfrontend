import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-updatedep',
  templateUrl: './updatedep.component.html',
  styleUrls: ['./updatedep.component.css']
})
export class UpdatedepComponent implements OnInit {

  id: any;
  depForm: FormGroup;
  projets: any;

  constructor( private activatedRoute: ActivatedRoute , 
               private data: DatadepService ,
               private router: Router,
               private fb: FormBuilder ,
               private _projet: ProjetService
    ) {

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

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getbyid(this.id)
      .subscribe(
        res=>{
          this.depForm.reset(res)
          
        }
      );

    
    this._projet.getbydep(this.id).subscribe({
      next:(res)=>{
        this.projets = res;
      }
    })


  }

  update(){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to update this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.data.update( this.id , this.depForm.value )
          .subscribe(
            res=>{
              this.router.navigate(['/dashboard/departement/list']);
            }
          )

      }
    })

  }


}
