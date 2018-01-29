import test from 'tape';
import { shallow } from 'enzyme';

import PrimaryFooter from './PrimaryFooter';

test('<PrimaryFooter>', (t) => {
  const component = shallow(<PrimaryFooter>Hello World</PrimaryFooter>);
  t.ok(component.is('div'), 'tag name');
  t.ok(component.is('.PrimaryFooter'), 'tag class');
  t.equal(component.text(), 'Hello World', 'text');
  t.end();
});
