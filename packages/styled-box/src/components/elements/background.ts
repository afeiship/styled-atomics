import { css } from 'styled-components';
import { PluginEntity } from '../types';

export default (inEntity: PluginEntity) => {
  const { props, data } = inEntity;
  const { bg } = props;

  const values = css`
    ${bg && 'background:' + bg + ';'}
  `;

  inEntity.data = data.concat(values);
  return inEntity;
};
