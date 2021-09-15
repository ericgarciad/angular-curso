import {NgModule} from '@angular/core'
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations: [ //los modules que lo componen
        ContadorComponent
    ],
    exports: [ //que cosas quiero hacer publicas fuera de este modulo (lo que se muestra en el html)
        ContadorComponent
    ],
    imports: [//Van modulos
        
    ]
})
export class ContadorModule {}