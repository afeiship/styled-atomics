import nx from '@jswork/next';
import nxCompose from '@jswork/next-compose';
import normalize from '@jswork/styled-plugin-normalize';

interface InlinePluiginName {
  name: string;
}

type InlinePlugin = Record<string, any> & InlinePluiginName;

const getPluginClass = (inPlugins, inName: string) => {
  return inPlugins.find((item) => {
    const { name, aliases } = item.prototype;
    return name === inName || aliases.includes(inName);
  });
};

export default (inEntity) => {
  const { plugin, plugins } = inEntity.props;
  if (!plugin) return inEntity;
  const inlinePlugins: InlinePlugin[] = normalize(plugin);
  const fns = inlinePlugins.map((inlinePlugin) => {
    const PluginClass = getPluginClass(plugins, inlinePlugin.name);
    return PluginClass ? (inEntity) => PluginClass.getEntity(inEntity) : nx.stubValue;
  });
  const fn = nxCompose.apply(null, fns);
  return fn(inEntity);
};
