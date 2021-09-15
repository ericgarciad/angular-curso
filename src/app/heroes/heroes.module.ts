import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ //los modules que lo componen
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //que cosas quiero hacer publicas fuera de este modulo (lo que se muestra en el html)
        ListadoComponent
    ],
    imports: [//Van modulos
        CommonModule // sirve para poder usar los modulso de Angular (ngFor ngIF etc..)
    ]
})
export class HeroesModule {}