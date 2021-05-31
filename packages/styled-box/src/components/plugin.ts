import { InlinePlugin, PluginEntity, EngineProps } from './types';

/**
 * plugin="transform-center:xy"
 * plugin={{ name:'transform-center', value: 'xy' }}
 * plugin={[{ name:'transform-center', value: 'xy' }, { name:'em-justify-list', value: 5 }]}
 */
export default class BasePlugin {
  private plugins: InlinePlugin[];
  protected current: InlinePlugin | null = null;
  protected values: string[] = [];
  protected data: any[];
  protected engine: EngineProps;
  protected entity: PluginEntity;

  public static getStyles(inEntity): PluginEntity {
    const { plugin, plugins } = inEntity.props;
    if (!plugin) return inEntity;
    const TargetClass =
      plugins.find((item) => {
        const target = BasePlugin.normalize(plugin);
        return target[0].name === item.prototype.name;
      }) || BasePlugin;
    const instance = new TargetClass(inEntity);
    return instance.get();
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
    if (plugin) {
      this.plugins = BasePlugin.normalize(plugin);
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
}
