export default function (inTemplate, ...args): string[] {
  const values = args.map((arg) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return arg;
    }
  });

  const len = values.length + inTemplate.length;
  const result: any[] = [];
  const sliced = inTemplate.slice(0);
  for (let i = 0; i < len; i++) {
    if (i % 2) {
      result.push(values.shift());
    } else {
      result.push(sliced.shift());
    }
  }

  return result;
}
