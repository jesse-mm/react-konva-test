import React from 'react';
import { mount } from 'enzyme';
import KonvaExample from '../../../src/KonvaExample';

describe('KonvaExample', () => {
  describe('Render path', () => {
    it('Should render Stage component', () => {
      const component = mount(<KonvaExample/>);
      console.log(component.debug());
    });
  });
});
