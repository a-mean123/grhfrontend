import { Component } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.css']
})
export class ListprojetComponent {
  constructor(private data: ProjetService) { }

  projets:any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        {
          next: res=>{
            this.projets = res;
          }
        }
      );

  }

  delete(id: any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
     
        this.data.supprimer(id)
          .subscribe(
            res=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.ngOnInit();
            }
          )


      }
    })

  }

}
