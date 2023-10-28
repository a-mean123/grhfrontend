import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css'],
})
export class UpdateclientComponent implements OnInit {
  id: any;
  clientForm: FormGroup;
  projets: any;
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private data: DataclientService,
    private router: Router,
    private _projet: ProjetService

  ) {
    let controls = {
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cin: new FormControl(0, [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    };

    this.clientForm = this.fb.group(controls);
  }

  photo: any;

  selectionnerImage(e: any) {
    this.photo = e.target.files[0];
  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.data.getbyid(this.id).subscribe((res) => {
      this.clientForm.reset(res);
    });

    this._projet.getbyclient(this.id).subscribe({
      next: (res) => {
        this.projets = res;
      },
    });
  }

  update() {
    let formdata = new FormData();
    formdata.append('nom', this.clientForm.value.nom);
    formdata.append('prenom', this.clientForm.value.prenom);
    formdata.append('email', this.clientForm.value.email);
    formdata.append('tel', this.clientForm.value.tel);
    formdata.append('cin', this.clientForm.value.cin);
    if (this.photo) {
      formdata.append('image', this.photo);
    }

    this.data.update(this.id, formdata).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your client has been updated',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/dashboard/client/list']);
    });
  }
}
