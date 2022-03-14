export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('Generics basic sample 1:', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 1000));

  // 型の種類の数だけ定義しなくてはいけないので、冗長的になってしまう
  type Reduce = {
    (array: string[], initialValue: string): string;
    (array: number[], initialValue: number): number;
  };

  // ジェネリック型を使った場合
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('Generics basic sample 3:', genericStringReduce(['MAKE ', 'TYPESCRIPT ', 'GREAT ', 'AGAIN'], ''));

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('Generics basic sample 4:', genericNumberReduce([-100, -200, -300], 1000));
}
