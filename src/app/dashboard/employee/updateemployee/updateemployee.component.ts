import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import { DataemployeeService } from 'src/app/services/dataemployee.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  employeeForm: FormGroup;
  id: any;
  departements: any;

  photo: any;
  constructor(
    private fb: FormBuilder ,
    private actRoute: ActivatedRoute , 
    private dataemp: DataemployeeService,
    private datadep: DatadepService,
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

  select(e:any){
    this.photo = e.target.files[0];
  }  

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.dataemp.getbyid(this.id)
      .subscribe(
        res=>{
          this.employeeForm.reset(res);
        }
      );
    this.datadep.getall()
      .subscribe(
        res=>{
          this.departements = res;
        }
      );    

  }


  update(){

    let formdata = new FormData();
    formdata.append('nom' , this.employeeForm.value.nom);
    formdata.append('prenom' , this.employeeForm.value.prenom);
    formdata.append('email' , this.employeeForm.value.email);
    formdata.append('tel' , this.employeeForm.value.tel);
    formdata.append('cin' , this.employeeForm.value.cin);
    formdata.append('idDep' , this.employeeForm.value.idDep);
    formdata.append('image' , this.photo);
    if(this.photo){
      formdata.append('image', this.photo);
    }

    this.dataemp.update( this.id, formdata )
      .subscribe(
        res=>{
          this.router.navigate(['/dashboard/employee/list']);
        }
      );


  }

}
