import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/imports/ui/layouts/MainLayout';
import Info from '/imports/ui/components/registro/Info';
import RegistroForm from '/imports/ui/components/registro/RegistroForm';
import RegistroExitoso from '/imports/ui/components/registro/RegistroExitoso';
import Admin from '/imports/ui/components/admin/AdminPage';
import Sign from '/imports/ui/components/admin/Sign';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: <Info />
    });
  }
});

FlowRouter.route('/registro', {
  action() {
    mount(MainLayout, {
      content: <RegistroForm />
    });
  }
});

FlowRouter.route('/registro/exitoso', {
  action() {
    mount(MainLayout, {
      content: <RegistroExitoso />
    });
  }
});

FlowRouter.route('/admin', {
  action() {
    mount(MainLayout, {
      content: <Admin />
    });
  }
});
