import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  education: Education = null;

  constructor(private educacionS: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.education = data;
      }, err => {
        alert("No pudo editarse la educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No pudo editarse la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
