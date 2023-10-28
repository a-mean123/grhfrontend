import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';
import { Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import { DataclientService } from 'src/app/services/dataclient.service';

@Component({
  selector: 'app-ajoutprojet',
  templateUrl: './ajoutprojet.component.html',
  styleUrls: ['./ajoutprojet.component.css']
})
export class AjoutprojetComponent {
  projetForm: FormGroup;
  clients : any;
  departements : any;

  constructor(private fb: FormBuilder ,private data: ProjetService, private router: Router, private _dep: DatadepService, private _client: DataclientService) {
    let controls = {
      titre: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      budget: new FormControl(0, [
        Validators.required
      ]),
      idClient: new FormControl('', [
        Validators.required
      ]),      
      idDep: new FormControl('', [
        Validators.required
      ])
    }

    this.projetForm = this.fb.group(controls);
  }
  
  
  ngOnInit(): void {

    this._client.getall().subscribe({
      next: (res: any)=>{
        this.clients = res;
      }
    })
    this._dep.getall().subscribe({
      next: (res: any)=>{
        this.departements = res;
      }
    })

  }

  ajouter(){

    this.data.create(this.projetForm.value)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your dep has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/projet/list'])
    
        }
      );

  }


}
