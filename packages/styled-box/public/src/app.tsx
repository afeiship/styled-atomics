import React from 'react';
import View from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <View c="#000" wp={6} auto>
        <View radius={8} c="#fff" bg="#4cd964" p={10} mb={10} f={14} lh={1.6}>
          道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。 故常无欲，以观其妙，常有欲，以观其徼。
          此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
        </View>

        <View radius={4} c="#fff" bg="#007aff" p={10} f={14}>
          天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。 故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。
          是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。 夫惟弗居，是以不去。
        </View>

        <View mt={10} flexbox={{ value: 'la' }}>
          <View p={10} bg="#f80" debug="red" className="is-left"> Left </View>
          <View p={10} bg="#eee" debug="blue" className="is-right"> Auto </View>
        </View>

        <View mt={10} flexbox={{ value: 'lr', align: 'center'}} debug="red" h={120}>
          <View p={10} bg="#f80" debug="red" className="is-left"> Left </View>
          <View p={10} bg="#060" debug="red" className="is-left"> Middle </View>
          <View p={10} bg="#eee" debug="blue" className="is-right"> Auto </View>
        </View>
      </View>
    </Container>
  );
};
