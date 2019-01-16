import { join } from 'path';

import { Module } from '@nestjs/common';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const BROWSER_DIR = join(process.cwd(), 'dist', 'apps', 'web-application');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('../../../../dist/apps/web-application-server/main.js')
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
