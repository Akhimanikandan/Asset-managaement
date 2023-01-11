import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

out(){
  this.router.navigate([''])
  sessionStorage.removeItem('authenticated'+'username');
}

asset(){
  this.router.navigate(['home/software'])
}
  
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
