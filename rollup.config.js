import glob from 'glob';

const files = glob.sync('src/packages/*.js');
const configs = files.map(item => {
  const dist = item.replace('src', 'dist');
  return {
    input: item,
    output: {
      file: dist,
      format: 'cjs'
    }
  }
})

export default configs;
