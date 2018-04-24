import React from 'react'
import renderer from 'react-test-renderer'
import KonvaExample from '../../../src/KonvaExample';

describe('<KonvaExample />', () => {
  it('renders initial UI', () => {
    const tree = renderer.create(<KonvaExample />).toJSON();
    expect(tree).MatchSnapshot();
  })
});
