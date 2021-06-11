import React from 'react';
import View from '../../src/main';
import styled from 'styled-components';

import plugin1 from '@jswork/styled-plugin-absolute-center';
import plugin2 from '@jswork/styled-plugin-em-justify-list';
import plugin3 from '@jswork/styled-plugin-flexbox';
import plugin4 from '@jswork/styled-plugin-radius-strip';
import plugin5 from '@jswork/styled-plugin-shadow';
import plugin6 from '@jswork/styled-plugin-transform-center';

console.log(plugin1);


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
  plugins: [plugin1, plugin2, plugin3, plugin4, plugin5, plugin6]
});

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <View c="#000" wp={8} bdw="2" bds="dashed" bdc="#ccc" bg="#fefefe" p={20} auto>
        <View radius={8} c="#fff" bg="#4cd964" p={10} mb={10} f={14} lh={1.6}>
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
          故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View>

        <View radius={4} c="#fff" bg="#007aff" p={10} f={14}>
          天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。
          故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
          是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
          夫惟弗居，是以不去。
        </View>

        <View mt={10} plugin="flexbox:la">
          <View p={10} bg="#f80" debug className="is-left">
            Left
          </View>
          <View p={10} bg="#eee" debug className="is-right">
            Auto
          </View>
        </View>

        <View mt={10} plugin={{ name: 'flexbox', value: 'lr', align: 'center' }} debug h={120}>
          <View p={10} bg="#f80" debug className="is-left">
            Left
          </View>
          <View p={10} bg="#060" debug className="is-left">
            Middle
          </View>
          <View p={10} bg="#eee" debug className="is-right">
            Auto
          </View>
        </View>

        <h2>elements: margin/padding</h2>
        <View mb_={10}>
          <View debug className="is-item">
            item1
          </View>
          <View debug className="is-item">
            item2
          </View>
          <View debug className="is-item">
            item3
          </View>
          <View debug className="is-item">
            item4
          </View>
          <View debug className="is-item">
            item5
          </View>
        </View>

        <View blank={20} />

        <View mb_={18} p_={5} strip bdc="#ccc" bdw={5} bds="dashed">
          <View debug className="is-item">
            item1
          </View>
          <View debug className="is-item">
            item2
          </View>
          <View debug className="is-item">
            item3
          </View>
          <View debug className="is-item">
            item4
          </View>
          <View debug className="is-item">
            item5
          </View>
        </View>

        <h2>elements: space</h2>
        <View space={20} debug p={10} y strip>
          <View debug className="is-item">
            item1
          </View>
          <View debug className="is-item">
            item2
          </View>
          <View debug className="is-item">
            item3
          </View>
          <View debug className="is-item">
            item4
          </View>
          <View debug className="is-item">
            item5
          </View>
        </View>

        <h2>elements: blank</h2>
        <View debug className="is-item">
          item1
        </View>
        <View blank={10} bg="#eee" debug />
        <View debug className="is-item">
          item3
        </View>
        <View blank={20} bg="#eee" debug />
        <View debug className="is-item">
          item4
        </View>
        <View blank={100} bg="#eee" debug />
        <View debug className="is-item">
          item5
        </View>

        <h2>elements: lc(1/2/3)</h2>
        <View debug lc={1} mb={10} className="is-item">
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
          故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View>
        <View debug lc={2} mb={10} wp={2} className="is-item">
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
          故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View>
        <View debug lc={3} wp={3} className="is-item">
          清晨醒来，打开窗帘，一抹慵懒的阳光照进来，暖暖的，柔柔的，时光瞬间变得温婉静美，打开音乐，沏一杯花茶，躺在床上，暖阳淼淼，茶香淡淡，音乐袅袅，闭上眼睛，嘴角轻轻上扬，算是对着光阴的镜子，和自己撒个娇。
        </View>

        <h2>Module: transform-center use InlinePlugin</h2>
        <View debug wh={200} relative>
          <View
            bg="#f60"
            c="#fff"
            f="38"
            o={5}
            wh={100}
            circle
            plugin={[
              { name: 'transform-center', value: 'xy' },
              { name: 'flexbox', value: 'center' }
            ]}
            tc>
            道
          </View>
        </View>

        <h2>Module: transform-center use stringInlinePlugin</h2>
        <View debug wh={200} relative>
          <View bg="#f60" c="#fff" f="38" wh={100} circle plugin="transform-center:xy" tc>
            道
          </View>
        </View>

        <h2>as: image - tobe avatar</h2>
        <View
          as="img"
          circle
          debug
          src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg"
        />

        <h2>Module: em-justify-list</h2>
        <View w={900} auto debug>
          <View plugin={{ name: 'em-justify-list', value: 5 }}>
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

        <h1>Module: shadow</h1>
        <View p={10} plugin="shadow:2">
          道可道，非常道；名可名，非常名。
        </View>

        <h1> Mouule: Multiple plugins</h1>
        <View
          bg="#0f0"
          c="#fff"
          f="38"
          wh={100}
          lh="2"
          circle
          plugin={[
            { name: 'transform-center', value: 'xy' },
            { name: 'shadow', value: 3 }
          ]}
          fixed
          tc>
          道
        </View>

        {/* <h1>Customize plugin:</h1>
        <View plugin="pp:#999">
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。
          此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View> */}
      </View>
    </Container>
  );
};
