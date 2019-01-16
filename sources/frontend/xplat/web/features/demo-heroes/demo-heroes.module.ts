import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoHeroesModule as SharedDemoHeroesModule } from '@frontend/features';

import { UIModule } from '../ui/ui.module';
import { DEMOHEROES_COMPONENTS, DemoHeroesComponent } from './components';

@NgModule({
  imports: [
    SharedDemoHeroesModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoHeroesComponent
      }
    ])
  ],
  declarations: [...DEMOHEROES_COMPONENTS],
  exports: [...DEMOHEROES_COMPONENTS]
})
export class DemoHeroesModule {}
