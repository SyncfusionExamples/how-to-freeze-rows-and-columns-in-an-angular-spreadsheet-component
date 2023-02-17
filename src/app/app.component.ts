import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from 
'@syncfusion/ej2-angular-spreadsheet';
import {freezePaneData} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = freezePaneData;

  public onCreate(){
    this.ssObj?.cellFormat({ fontWeight: 'bold', 
    textAlign: 'center' }, 'A1:P1');

    this.ssObj?.wrap("A1:P1");
    this.ssObj?.freezePanes(1,2);
  }
}
