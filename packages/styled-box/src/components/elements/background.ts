import { css } from 'styled-components';
import { PluginEntity } from '../types';

export default (inEntity: PluginEntity) => {
  const { props, data } = inEntity;
  const { bg, bg_, sub } = props;

  const values = css`
    ${bg && 'background:' + bg + ';'}
    ${bg_ && '> ' + sub + ' { background: ' + bg_ + '; }'}
  `;

  inEntity.data = data.concat(values);
  return inEntity;
};
