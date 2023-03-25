import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { SImageService } from 'src/app/services/s-image.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  education: Education = null;

  constructor(private educacionS: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router, public sImageService: SImageService) { }

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
    this.education.imagenE = this.sImageService.url;
    this.educacionS.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No pudo editarse la educacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "education_" + id;
    this.sImageService.uploadImage($event, name, 'education');
  }

}
