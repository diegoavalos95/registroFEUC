import FlowRouter from 'meteor/low-router'
import {mount} from 'react-mounter';

import MainLayout from '/imports/ui/components/layouts/MainLayout';
import HelloWorld from './imports/ui/components/layouts/HelloWorld';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <HelloWorld name="Alexis" />
    });
  }
});
