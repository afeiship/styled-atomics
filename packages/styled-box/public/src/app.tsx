import React, { useState } from 'react';
import View from '../../src/main';
import styled from 'styled-components';

import plugin1 from '@jswork/styled-plugin-absolute-center';
import plugin2 from '@jswork/styled-plugin-em-justify-list';
import plugin3 from '@jswork/styled-plugin-flexbox';
import plugin4 from '@jswork/styled-plugin-radius-strip';
import plugin5 from '@jswork/styled-plugin-shadow';
import plugin6 from '@jswork/styled-plugin-transform-center';
import plugin7 from '@jswork/styled-plugin-scaleable-image';
import plugin8 from '@jswork/styled-plugin-absolute-rect';
import plugin9 from '@jswork/styled-plugin-position-box';
import plugin10 from '@jswork/styled-plugin-fixed-toolbar';
import plugin11 from '@jswork/styled-plugin-icon-text';
import plugin12 from '@jswork/styled-plugin-list';
import plugin13 from '@jswork/styled-plugin-line';
import plugin14 from '@jswork/styled-plugin-arrow';
import ReactList from '@jswork/react-list';

// const pluing1 = (options) => {
//   const { props, data } = options;
//   const { plugin } = props;
//   if (plugin && plugin.includes('pp')) {
//     const value = plugin.split(':')[1] || '#f60';
//     const values = css`
//       ${'border:2px solid ' + value + '; padding: 10px; background:#eee;'}
//     `;

//     options.data = data.concat(values);
//   }
//   return options;
// };

// global config engine:
Object.assign(View.defaultProps, {
  styled,
  val: (value) => (parseInt(value) / 16).toFixed(2),
  unit: 'rem',
  plugins: [
    plugin1,
    plugin2,
    plugin3,
    plugin4,
    plugin5,
    plugin6,
    plugin7,
    plugin8,
    plugin9,
    plugin10,
    plugin11,
    plugin12,
    plugin13,
    plugin14
  ]
});

const Container = styled(View)`
  border: 1px solid #eee;
  .is-text {
    &:hover {
      color: red;
    }
  }
`;

export default (props: any) => {
  const [value, setValue] = useState(false);
  console.log('value::', value);
  return (
    <div>
      <section>other container: {value}</section>
      <button
        onClick={(e) => {
          setValue(true);
          console.log('change disabled');
        }}>
        Set disabled value
      </button>
      <View disabled={value} wp={8} auto debug p={20}>
        道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
        故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
      </View>
    </div>
  );
};
