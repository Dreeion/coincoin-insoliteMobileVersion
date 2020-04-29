import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';

import { TestComponentModule } from '../../components/footer/footer.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialPageRoutingModule,
    TestComponentModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
