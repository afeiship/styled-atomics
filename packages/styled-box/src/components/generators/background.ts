import { PluginEntity } from '@jswork/styled-types';
import css from '@jswork/styled-css';

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
