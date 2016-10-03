import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/imports/ui/layouts/MainLayout';
import HelloWorld from '/imports/ui/components/HelloWorld';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <HelloWorld name="Alexis" />
    });
  }
});
