// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-moment';
import 'angular-meteor-auth';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import LoginCtrl from '../controllers/login.controller';
import NewChatCtrl from '../controllers/new-chat.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import ProfileCtrl from '../controllers/profile.controller';
import SettingCtrl from '../controllers/settings.controller';

//directives
import InputDirective from '../directives/input.directive';

//filters
import CalendarFilter from '../filters/calendar.filter';
import ChatNameFilter from '../filters/chat-name.filter';
import ChatPictureFilter from '../filters/chat-picture.filter';


//services
import NewChatService from '../services/new-chat.service';

import Routes from '../routes';

const App = 'Whatsapp';

// App
Angular.module(App, [
    'angular-meteor',
    'angular-meteor.auth',
    'angularMoment',
    'ionic'
]);



new Loader(App)
    .load(ChatsCtrl)
    .load(ChatCtrl)
    .load(LoginCtrl)
    .load(NewChatCtrl)
    .load(ConfirmationCtrl)
    .load(ProfileCtrl)
    .load(SettingCtrl)
    .load(InputDirective)
    .load(CalendarFilter)
    .load(ChatNameFilter)
    .load(ChatPictureFilter)
    .load(NewChatService)

    .load(Routes);


// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}
