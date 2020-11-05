// Box ui-elements maintains one global variable i.e Box
// this variable helps to get methods/classes

declare var Box:any;
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // for best practice save Keys/Tokens/urls in environment file.
  // refer environment.ts

  // Access Token for Box Api to authenticate.
  // Refer this link to generate dev access token
  // https://github.com/bojjakaseenadhreddy/integrate-box-ui-elments-in-anugular/blob/master/README.md
  BOX_ACCESS_TOKEN = environment.boxAccessToken;

  // used to display files from specific folder (or) keep 0 to display all files
  BOX_FOLDER_ID = environment.boxFolderId;

  // we use the "id" of html element.(dont use class it leads to  some errors)
  // refere html app.component.html
  DOMContainer = '#my-box-content-explorer';

  ngOnInit(){
    // to diplay Box Content Explorer when page gets loaded
    this.showContentExplorer(this.DOMContainer,this.BOX_ACCESS_TOKEN,this.BOX_FOLDER_ID);
  }
  
  title = 'box-ui-elements-in-angular';

  showContentExplorer(container:string,token:string,folder:string){
    // create object to ContentExplorer class.
      var contentExplorer = new Box.ContentExplorer();

    // invoke show method with object and pass the required parameters
      contentExplorer.show(folder,token,{
        container:  container
      });
  }
}
