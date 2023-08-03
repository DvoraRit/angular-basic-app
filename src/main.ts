import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import { AppModule } from './app/app.module';
import 'firebase/analytics';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
