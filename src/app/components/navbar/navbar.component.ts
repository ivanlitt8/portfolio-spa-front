import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menu',{static:true}) menu: ElementRef | undefined
  @ViewChild('list',{static:true}) list: ElementRef | undefined

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    if(event.target.innerWidth>800){
      console.log('AAAAAAAAAA');
    }
  }

  ngOnInit(): void {
    console.log(this.menu?.nativeElement)
    console.log(this.list?.nativeElement)
  }

  // toggle(){
  //   console.log('Hola')
  // }


  // constructor(public elementRef: ElementRef) {

  // }


  toggle() {

    const navbarToggler =
      this.list?.nativeElement;
        navbarToggler.classList.toggle('menu_links--show');
  }
}