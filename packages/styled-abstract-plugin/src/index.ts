import { InlinePlugin, PluginEntity } from '@jswork/styled-types';
import normalize from '@jswork/styled-plugin-normalize';
import css from '@jswork/styled-css';

export default class {
  get aliases(): string[] {
    return [];
  }

  get name() {
    return 'styled-abstract-plugin';
  }

  private plugins: InlinePlugin[];
  protected current: InlinePlugin;
  protected values: string[] = [];
  protected styledCss: any;
  protected entity: PluginEntity;

  public static getEntity(inEntity: PluginEntity): PluginEntity {
    const instance = new this(inEntity);
    return instance.get();
  }

  get defaults(): any {
    return {};
  }

  constructor(inEntity: PluginEntity) {
    const { props } = inEntity;
    const { plugin } = props;
    this.entity = inEntity;
    this.plugins = normalize(plugin as InlinePlugin);
    this.current = this.plugins.find((plugin) => {
      const ifeName = this.name === plugin.name;
      const ifeAlias = this.aliases.includes(plugin.name);
      return (ifeName || ifeAlias) && !plugin.done;
    })!;

    // override defaluts
    this.current && Object.assign(this.current, Object.assign(this.defaults, this.current));
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
    if (this.current) this.current.done = true;
    return this.entity;
  }
}
