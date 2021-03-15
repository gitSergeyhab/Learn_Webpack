import {config} from './modules/config';
import AppService from './modules/app.service';
import './modules/header.component';
import './css/style.css';

console.log('CK: ', config.key);


const service = new AppService('Hello from AppService!');
service.log();