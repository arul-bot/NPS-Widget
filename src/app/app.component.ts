import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [

	],
})
export class AppComponent{

  title = 'Bootstrap_nps';
  input! : boolean;
  ctrl = new FormControl<number | null>(null, Validators.required);

  toggle() {
		if (this.ctrl.value! <= 7) {
			this.input = true;
		}else{
      this.input = false;
    }
	}
  OnSubmit(){
    if(this.ctrl.value! <= 7){
      this.toggle();
    }else{
      this.AfterSubmit();
      this.toggle();
    }
  }

  AfterSubmit(){
    console.warn(this.ctrl.value);
    console.warn(this.input);
    
  }
  
}
