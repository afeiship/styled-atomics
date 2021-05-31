const CHAR_COLON = ':';
const CHAR_SEMICOLON = ';';

interface InlinePluiginName {
  name: string;
}

type InlinePlugin = Record<string, any> & InlinePluiginName;
type InlinePluginParams = (string & InlinePlugin) | InlinePlugin[];

export default (inPlugin: InlinePluginParams): InlinePlugin[] => {
  return [];
};
