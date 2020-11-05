# Box ui-elements integration in Angular-2 and above versions ✌😎😎

###Create Box account

1. Create box account if you don't have before.
2. Go to https://app.box.com/developers/console
3. Create new App, select Custom App.
4. Select Authentication method as JWT, and give your app name.
5. Open the app configuration and copy the Developer Token. If not exist generate new one.(Note: this is only for testing purpose token will expire in One Hour).
6. Set Application access as Application.
7. Then select your required configuration.
8. Click Save changes.
9. Move to General Setting of your app.
10. App Authorization: Click on review and submit.
11. check if the State is Disable or not. If disable you need admin access to approve this app (or) request someone who has access.
12. Go to Admin Console ( http://app.box.com/master/settings/apps ) in Apps menu will show somw configurations.
13 Go to Custom Apps tab on the top and Authourize the App.
14. Upload few files in https://app.box.com/folder/0.
15. End 😍😍😍


### Create new Angular application

```ng new <project-name>```

1. Open app.component.hrml
  Add the following code. Here we display the box files in the Div tag.

```{html}
<h2>Box Content Explorer</h2>

<div id="my-box-content-explorer">

</div>
```
2. Open app.component.ts add the following code.

```{js}

declare var Box:any;
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  BOX_ACCESS_TOKEN = environment.boxAccessToken;
  BOX_FOLDER_ID = environment.boxFolderId;
  DOMContainer = '#my-box-content-explorer';

  ngOnInit(){
    this.showContentExplorer(this.DOMContainer,this.BOX_ACCESS_TOKEN,this.BOX_FOLDER_ID);
  }
  title = 'box-ui-elements-in-angular';
  showContentExplorer(container:string,token:string,folder:string){
      var contentExplorer = new Box.ContentExplorer();
      contentExplorer.show(folder,token,{
        container:  container
      });
  }
}

```
3. Open environment.ts add access token and folder id. keep 0 to display all files
```
export const environment = {
  production: false,
  boxAccessToken: "paste Your developer access token",
  boxFolderId: "your folder id"
};
```
Then run the angular application.
``` ng serve ```

#### End 😍😍👍✨
#### If you find any issues kindly create a new issue in this repository (or) send a mail to kaseenadh111@gmail.com
