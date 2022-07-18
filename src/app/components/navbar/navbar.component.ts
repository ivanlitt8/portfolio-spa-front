import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menu',{static:true}) menu: ElementRef | undefined
  @ViewChild('list',{static:true}) list: ElementRef | undefined

  ngOnInit(): void {
    
  }

  
  toggle() {

    const navbarToggler =
      this.list?.nativeElement;
        navbarToggler.classList.toggle('menu_links--show');
  }
}