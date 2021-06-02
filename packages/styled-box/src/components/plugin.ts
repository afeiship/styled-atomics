import { InlinePlugin, PluginEntity } from './types';
import normalize from '@jswork/plugin-normalize';
import css from '@jswork/styled-css';

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
  protected styledCss: any;
  protected entity: PluginEntity;

  public static getEntity(inEntity: PluginEntity): PluginEntity {
    const instance = new this(inEntity);
    return instance.get();
  }

  constructor(inEntity: PluginEntity) {
    const { props } = inEntity;
    const { plugin } = props;
    this.entity = inEntity;
    this.plugins = normalize(plugin as InlinePlugin);
    this.current = this.plugins.find((plugin) => plugin.name === this.name) || null;
  }

  public pipe() {
    this.values = css``;
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
