import test from 'tape';
import { shallow } from 'enzyme';

import Accordions from './Accordions';

test('<Accordions>', (t) => {
  const component = shallow(<Accordions>Hello World</Accordions>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.Accordions'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
