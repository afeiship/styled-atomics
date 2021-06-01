import { InlinePlugin, PluginEntity, EngineProps } from './types';
import normalize from '@jswork/plugin-normalize';

export class AbstractPlugin {
  get aliases(): string[] {
    return [];
  }

  get name() {
    return 'abstract-plugin';
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
    this.plugins = normalize(plugin as InlinePlugin);
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
