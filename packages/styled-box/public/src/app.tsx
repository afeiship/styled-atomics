import React from 'react';
import View from '../../src/main';
import styled, { css } from 'styled-components';

const pluing1 = (options) => {
  const { props, data } = options;
  const { plugin } = props;
  if (plugin && plugin.includes('pp')) {
    const value = plugin.split(':')[1] || '#f60';
    const values = css`
      ${'border:1px solid ' + value + '; padding: 10px; background:#eee;'}
    `;

    options.data = data.concat(values);
  }
  return options;
};

// global config engine:
Object.assign(View.defaultProps, { engine: { styled, css }, plugins: [pluing1] });

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <View c="#000" wp={8} auto>
        <View radius={8} c="#fff" bg="#4cd964" p={10} mb={10} f={14} lh={1.6}>
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。
          此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View>

        <View radius={4} c="#fff" bg="#007aff" p={10} f={14}>
          天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。 故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
          是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。 夫惟弗居，是以不去。
        </View>

        <View mt={10} flexbox={{ value: 'la' }}>
          <View p={10} bg="#f80" debug="red" className="is-left">
            Left
          </View>
          <View p={10} bg="#eee" debug="blue" className="is-right">
            Auto
          </View>
        </View>

        <View mt={10} flexbox={{ value: 'lr', align: 'center' }} debug="red" h={120}>
          <View p={10} bg="#f80" debug="red" className="is-left">
            Left
          </View>
          <View p={10} bg="#060" debug="red" className="is-left">
            Middle
          </View>
          <View p={10} bg="#eee" debug="blue" className="is-right">
            Auto
          </View>
        </View>

        <h2>Module: transform-center</h2>
        <View debug="red" wh={200} relative>
          <View bg="#f60" wh={100} circle plugin="transform-center:xy">
            {/* 道 */}
          </View>
        </View>

        <h2>Module: em-justify-list</h2>
        <View w={900} auto debug>
          <View plugin="em-justify-list:5">
            <View bg="#eee" h={100} className="is-item">
              item1
            </View>
            <View bg="#f30" h={100} className="is-item">
              item2
            </View>
            <View bg="#ddd" h={100} className="is-item">
              item3
            </View>
            <View bg="#030" h={100} className="is-item">
              item2
            </View>
            <View bg="#ddd" h={100} className="is-item">
              item3
            </View>
            <View bg="#ccc" h={100} className="is-item">
              item3
            </View>
            <View bg="#999" h={100} className="is-item">
              item3
            </View>
          </View>
        </View>

        <h1>Customize plugin:</h1>
        <View plugin="pp:#999">
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。
          此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View>
      </View>
    </Container>
  );
};
