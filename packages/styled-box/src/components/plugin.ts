import { InlinePlugin, PluginEntity, EngineProps } from './types';
import nx from '@jswork/next';
import nxCompose from '@jswork/next-compose';

/**
 * plugin="transform-center:xy"
 * plugin={{ name:'transform-center', value: 'xy' }}
 * plugin={[{ name:'transform-center', value: 'xy' }, { name:'em-justify-list', value: 5 }]}
 */

const SEPARATOR = ':';

export class PluginManager {
  public static getEntity(inEntity): PluginEntity {
    const { plugin, plugins } = inEntity.props;
    if (!plugin) return inEntity;
    const inlinePlugins: InlinePlugin[] = PluginManager.normalize(plugin);
    const fns = inlinePlugins.map((inlinePlugin) => {
      const PluginClass = plugins.find((item) => item.prototype.name === inlinePlugin.name);
      return PluginClass ? (inEntity) => PluginClass.getEntity(inEntity) : nx.stubValue;
    });
    const fn = nxCompose.apply(null, fns);
    return fn(inEntity);
  }

  public static normalize(inPlugin: string | InlinePlugin): InlinePlugin[] {
    if (Array.isArray(inPlugin)) return inPlugin;
    if (typeof inPlugin === 'object') return [inPlugin];
    if (!inPlugin.includes(SEPARATOR)) return [{ name: inPlugin }];
    const [name, value] = inPlugin.split(SEPARATOR);
    return [{ name, value }];
  }
}

export class AbstractPlugin {
  get name() {
    return 'basic-plugin';
  }

  private plugins: InlinePlugin[];
  protected current: InlinePlugin | null = null;
  protected values: string[] = [];
  protected engine: EngineProps;
  protected styledCss: any;
  protected entity: PluginEntity;

  public static getEntity(inEntity: PluginEntity): PluginEntity {
    const instance = new this(inEntity);
    return instance.get();
  }

  constructor(inEntity: PluginEntity) {
    const { props } = inEntity;
    const { plugin, engine } = props;
    this.entity = inEntity;
    this.engine = engine;
    this.styledCss = this.engine.css;
    this.plugins = PluginManager.normalize(plugin as InlinePlugin);
    this.current = this.plugins.find((plugin) => plugin.name === this.name) || null;
  }

  public pipe() {
    this.values = this.styledCss``;
  }

  public merge() {
    this.entity.data = this.entity.data.concat(this.values);
  }

  public get() {
    this.pipe();
    this.merge();
    return this.entity;
  }
}
