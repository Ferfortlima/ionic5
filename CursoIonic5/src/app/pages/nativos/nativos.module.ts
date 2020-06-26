import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativosPageRoutingModule } from './nativos-routing.module';

import { NativosPage } from './nativos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativosPageRoutingModule
  ],
  declarations: [NativosPage]
})
export class NativosPageModule {}
