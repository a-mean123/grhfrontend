import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ProjetService } from 'src/app/services/projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import { DataclientService } from 'src/app/services/dataclient.service';

@Component({
  selector: 'app-editprojet',
  templateUrl: './editprojet.component.html',
  styleUrls: ['./editprojet.component.css'],
})
export class EditprojetComponent {
  projetForm: FormGroup;
  clients: any;
  departements: any;
  id: any;

  toGenerateFacture: boolean = false;
  factureClient: any;

  constructor(
    private _act: ActivatedRoute,
    private fb: FormBuilder,
    private data: ProjetService,
    private router: Router,
    private _dep: DatadepService,
    private _client: DataclientService
  ) {
    let controls = {
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      budget: new FormControl(0, [Validators.required]),
      etat: new FormControl('', [Validators.required]),
      idClient: new FormControl('', [Validators.required]),
      idDep: new FormControl('', [Validators.required]),
    };

    this.projetForm = this.fb.group(controls);
  }

  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');

    this.data.getbyid(this.id).subscribe({
      next: (res) => {
        this.projetForm.reset(res);
      },
    });

    this._client.getall().subscribe({
      next: (res: any) => {
        this.clients = res;
      },
    });

    this._dep.getall().subscribe({
      next: (res: any) => {
        this.departements = res;
      },
    });
  }

  update() {
    this.data.update(this.id, this.projetForm.value).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your dep has been saved',
        showConfirmButton: false,
        timer: 1500,
      });

      this.router.navigate(['/dashboard/projet/list']);
    });
  }

  defineClient() {
    for (var i = 0; i < this.clients.length; i++) {
      if (this.clients[i]._id == this.projetForm.value.idClient) {
        this.factureClient = this.clients[i];
      }
    }
    setTimeout(() => {
      window.scrollTo(0,10000);
    }, 100);
  }

  printOut(divId: any) {
    var printOutContent = document.getElementById(divId)!.innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printOutContent;
    window.print();
    document.body.innerHTML = originalContent;
  }
}
