import { InlinePlugin, EngineProps } from './types';


/**
 * plugin="transform-center:xy"
 * plugin={{ name:'transform-center', value: 'xy' }}
 * plugin={[{ name:'transform-center', value: 'xy' }, { name:'em-justify-list', value: 5 }]}
 */

export default class {
  private entity;
  private plugins: InlinePlugin[];
  private values: string[] = [];
  private data: any[];
  private engine: EngineProps;

  constructor(inEntity) {
    const { props, data } = inEntity;
    const { plugin, engine } = props;
    this.data = data;
    this.plugins = this.normalize(plugin);
    this.engine = engine;
    // this.plugins = this.normalize(inPlugin);
    // this.data = inData;
  }

  public defaults() {
    return null;
  }

  public pipe() {
    // tobe implements
  }

  public merge() {
    this.entity.data = this.entity.data.concat(this.values);
  }

  public get() {
    return this.entity.data;
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
