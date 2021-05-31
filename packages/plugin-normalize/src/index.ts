const CHAR_COLON = ':';
const CHAR_SEMICOLON = ';';

interface InlinePluiginName {
  name: string;
}

type InlinePlugin = Record<string, any> & InlinePluiginName;
type InlinePluginParams = string | InlinePlugin | any[];


/**
 * plugin="transform-center:xy"
 * plugin="transform-center:xy; shadow:5"
 * plugin={{ name:'transform-center', value: 'xy' }}
 * plugin={['transform-center:xy', 'shadow:5']}
 * plugin={[{ name:'transform-center', value: 'xy' }, { name:'em-justify-list', value: 5 }]}
 */

function normalize(inPlugin: InlinePluginParams): InlinePlugin[] {
  const results: InlinePlugin[] = [];
  if (typeof inPlugin === 'string') {
    if (inPlugin.includes(CHAR_SEMICOLON)) {
      const parts = inPlugin.split(CHAR_SEMICOLON);
      return parts.reduce((res, part: string) => {
        res = res.concat(normalize(part));
        return res;
      }, results);
    }

    if (inPlugin.includes(CHAR_COLON)) {
      const [name, value] = inPlugin.split(CHAR_COLON);
      return [{ name: name.trim(), value: value.trim() }];
    }

    const name = inPlugin.trim();
    return name ? [{ name }] : results;
  } else {
    if (Array.isArray(inPlugin)) {
      return inPlugin.reduce((res, part) => {
        res = res.concat(normalize(part));
        return res;
      }, results);
    } else {
      if (typeof inPlugin === 'object') {
        return [inPlugin];
      }
    }
  }

  return results;
}

export default normalize;
