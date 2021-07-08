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
  const [value, setValue] = useState('');
  console.log('value::', value);
  return (
    <div>
      <section>other container: {value}</section>
      <View
        data-value={value}
        auto
        wp={8}
        plugin={[
          // { name: 'fixed-toolbar', value: 100, gap: 20, role: 'header' },
          { name: 'fixed-toolbar', value: 50, gap: 10, role: 'footer' }
        ]}>
        <div>value: -{value}</div>
        <View debug plugin="icon-text:10">
          <img width="104" src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg" />
          <label>
            <input
              type="text"
              onChange={(e) => {
                // console.log('change.', e.target.value);
                setValue(e.target.value);
              }}
            />
          </label>
        </View>
        <View debug="@3" plugin={{ name: 'list', value: 5, gap: 20, width: 230 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <a
                onClick={(e) => {
                  setValue(value + 1);
                }}
                key={item}>
                <Container plugin="scaleable-image" sub="img" w={230} radius={10}>
                  <View
                    w100
                    cp
                    h={130}
                    as="img"
                    src="https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg"
                  />
                  <View cd f={16} lc={2} m={8} className="is-text">
                    退隐江湖多年，佛门神尼再出江湖，万千剑气从天而降，谁敢造次！
                  </View>
                </Container>
              </a>
            );
          })}
        </View>
      </View>
    </div>
  );
};
