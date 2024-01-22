import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	navbarOpen = false;
	resumeLink = environment.resumeLink;
	linkedinLink = environment.linkedinLink;

	toggleNavbar(){
		this.navbarOpen = !this.navbarOpen;
	}

	useAnchorLink(link: string){
		window.location.href = "./" + link;
		this.navbarOpen = false;
	}

}
