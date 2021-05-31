import { InlinePlugin, EngineProps } from './types';

/**
 * plugin="transform-center:xy"
 * plugin={{ name:'transform-center', value: 'xy' }}
 * plugin={[{ name:'transform-center', value: 'xy' }, { name:'em-justify-list', value: 5 }]}
 */

export default class {
  private entity;
  private plugins: InlinePlugin[];
  private current: InlinePlugin;
  private values: string[] = [];
  private data: any[];
  private engine: EngineProps;

  get name() {
    return 'basic-plugin';
  }

  constructor(inEntity) {
    const { props, data } = inEntity;
    const { plugin, engine } = props;
    this.data = data;
    this.plugins = this.normalize(plugin);
    this.current = this.plugins.find((plugin) => plugin.name === this.name) || this.plugins[0];
    this.engine = engine;
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
    return this.data;
  }

  private normalize(inPlugin: string | InlinePlugin): InlinePlugin[] {
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
