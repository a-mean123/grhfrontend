import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import { DataemployeeService } from 'src/app/services/dataemployee.service';
import Swal from 'sweetalert2'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajoutemployee',
  templateUrl: './ajoutemployee.component.html',
  styleUrls: ['./ajoutemployee.component.css']
})
export class AjoutemployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(  
    private fb: FormBuilder ,
    private datadep: DatadepService , 
    private dataemp: DataemployeeService,
    private router: Router
    ) {

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
        idDep: new FormControl('', [
          Validators.required
        ]),
        image: new FormControl('', [
          Validators.required
        ])
      }
      
      this.employeeForm = this.fb.group(controls);
    }
    
    departements: any;
    
    
    ngOnInit(): void {
  
      this.datadep.getall()
        .subscribe(
          res=>{
            this.departements = res;
          }
        );
  
    }
  
  photo: any;
  
  select(e:any){
    this.photo = e.target.files[0];

  }

  ajout(){
    

    let formdata = new FormData();
    formdata.append('nom' , this.employeeForm.value.nom);
    formdata.append('prenom' , this.employeeForm.value.prenom);
    formdata.append('email' , this.employeeForm.value.email);
    formdata.append('tel' , this.employeeForm.value.tel);
    formdata.append('cin' , this.employeeForm.value.cin);
    formdata.append('idDep' , this.employeeForm.value.idDep);
    formdata.append('image' , this.photo);

    this.dataemp.create(formdata)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your employee has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/employee/list']);
          
        }
      );

  }



}
