import test from 'tape';
import { shallow } from 'enzyme';

import PrimaryHeader from './PrimaryHeader';

test('<PrimaryHeader>', (t) => {
  const component = shallow(<PrimaryHeader>Hello World</PrimaryHeader>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.PrimaryHeader'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
