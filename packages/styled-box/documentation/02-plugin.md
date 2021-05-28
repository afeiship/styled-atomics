# plugin


## 开发一个插件
```ts
const Default: Plugin = (inEntity) => {
  const { props, data } = inEntity;
  const { plugin, engine } = props;

  if (plugin) {
    const values = engine!.css`
      ${plugin.includes('absolute-center') && 'position: absolute; margin: auto;'}
      ${(plugin === 'absolute-center:x' || plugin === 'absolute-center:xy') && 'left:0; right:0;'}
      ${(plugin === 'absolute-center:y' || plugin === 'absolute-center:xy') && 'top:0; bottom:0;'}
    `;
    inEntity.data = data.concat(values);
  }

  return inEntity;
};

export default Default;
```
