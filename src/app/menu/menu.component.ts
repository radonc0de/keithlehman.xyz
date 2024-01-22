import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	navbarOpen = false;

	toggleNavbar(){
		this.navbarOpen = !this.navbarOpen;
	}

	useAnchorLink(link: string){
		window.location.href = "./" + link;
		this.navbarOpen = false;
	}

}
