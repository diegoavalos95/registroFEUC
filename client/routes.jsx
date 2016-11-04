import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/imports/ui/layouts/MainLayout';
import Info from '/imports/ui/components/registro/Info';
import RegistroForm from '/imports/ui/components/registro/RegistroForm';
import RegistroExitoso from '/imports/ui/components/registro/RegistroExitoso';
import AdminPageContainer from '/imports/ui/components/admin/AdminPageContainer';
import Sign from '/imports/ui/components/admin/Sign';
import Login from '/imports/ui/components/admin/Login';
import RegistroContainer from '/imports/ui/components/admin/RegistroContainer';

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
    if (Meteor.userId()) {
      mount(MainLayout, {
        content: <AdminPageContainer />
      });
    } else {
      FlowRouter.go('/login');
    }
  }
});

FlowRouter.route('/registro/:id', {
  action(params, queryParams) {
    if (Meteor.userId()) {
      mount(MainLayout, {
        content: <RegistroContainer params={params}/>
      });
    } else {
      FlowRouter.go('/login');
    }
  }
});

FlowRouter.route('/login', {
  action() {
    if (!Meteor.userId()) {
      mount(MainLayout, {
        content: <Login />
      });
    } else {
      FlowRouter.go('/admin');
    }
  }
});
