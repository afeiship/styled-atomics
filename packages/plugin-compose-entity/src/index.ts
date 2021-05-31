import nx from '@jswork/next';
import nxCompose from '@jswork/next-compose';
import normalize from '@jswork/plugin-normalize';

interface InlinePluiginName {
  name: string;
}

type InlinePlugin = Record<string, any> & InlinePluiginName;

export default (inEntity) => {
  const { plugin, plugins } = inEntity.props;
  if (!plugin) return inEntity;
  const inlinePlugins: InlinePlugin[] = normalize(plugin);
  const fns = inlinePlugins.map((inlinePlugin) => {
    const PluginClass = plugins.find((item) => item.prototype.name === inlinePlugin.name);
    return PluginClass ? (inEntity) => PluginClass.getEntity(inEntity) : nx.stubValue;
  });
  const fn = nxCompose.apply(null, fns);
  return fn(inEntity);
};
