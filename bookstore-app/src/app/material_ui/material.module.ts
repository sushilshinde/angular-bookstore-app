import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
const MaterialImports=[
    MatCardModule,MatCheckboxModule
]

@NgModule({
    imports: [MaterialImports],
    exports:[MaterialImports]
})
export class MaterialModule {

}