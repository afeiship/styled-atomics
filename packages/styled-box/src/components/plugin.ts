import { InlinePlugin, PluginEntity, EngineProps } from './types';
import nx from '@jswork/next';
import nxCompose from '@jswork/next-compose';
/**
 * plugin="transform-center:xy"
 * plugin={{ name:'transform-center', value: 'xy' }}
 * plugin={[{ name:'transform-center', value: 'xy' }, { name:'em-justify-list', value: 5 }]}
 */
export default class AbstractPlugin {
  private plugins: InlinePlugin[];
  protected current: InlinePlugin | null = null;
  protected values: string[] = [];
  protected data: any[];
  protected engine: EngineProps;
  protected styledCss: any;
  protected entity: PluginEntity;

  public static getStyles(inEntity): PluginEntity {
    const { plugin, plugins } = inEntity.props;
    if (!plugin) return inEntity;
    const inlinePlugins = AbstractPlugin.normalize(plugin);
    const fns = inlinePlugins.map((inlinePlugin) => {
      const Clazz = plugins.find((item) => {
        return item.prototype.name === inlinePlugin.name;
      });
      if (Clazz) {
        return (inEntity) => {
          const instance = new Clazz(inEntity);
          return instance.get();
        };
      } else {
        return nx.stubValue;
      }
    });
    const fn = nxCompose.apply(null, fns);
    return fn(inEntity);
  }

  public static normalize(inPlugin: string | InlinePlugin): InlinePlugin[] {
    if (typeof inPlugin === 'string') {
      if (inPlugin.includes(':')) {
        const parts = inPlugin.split(':');
        return [{ name: parts[0], value: parts[1] }];
      }
      return [{ name: inPlugin }];
    }
    return Array.isArray(inPlugin) ? inPlugin : [inPlugin];
  }

  public get name() {
    return 'basic-plugin';
  }

  constructor(inEntity: PluginEntity) {
    const { props, data } = inEntity;
    const { plugin, engine } = props;
    this.entity = inEntity;
    this.data = data;
    this.engine = engine;
    this.styledCss = this.engine.css;
    if (plugin) {
      this.plugins = AbstractPlugin.normalize(plugin);
      this.current = this.plugins.find((plugin) => plugin.name === this.name) || null;
    }
  }

  public pipe() {
    this.values = this.engine.css``;
  }

  public merge() {
    this.data = this.data.concat(this.values);
  }

  public get() {
    this.pipe();
    this.merge();
    this.entity.data = this.data;
    return this.entity;
  }
}
