import React,{Fragment, useState, useEffect, useMemo, useCallback, useRef,memo, useContext} from 'react';


interface IProps {
    name: string;
    loading: boolean;
}

type CardProps = {
    readonly id: number;
    title: string;
    context: string;
    // [index: string]: string | number
}

type Log = {
    (val: number): number;
    // (val: string): string; 
}

const log1: Log = (val) => val




// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
    return o.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
  }
  
  // 创建 K: V
//   const a = strEnum()
  const Direction = strEnum(['North', 'South', 'East', 'West']);
  
  // 创建一个类型
  type Direction = keyof typeof Direction;
  
//   type a = keyof typeof Direction
  // 简单的使用
  let sample: Direction;
  
  sample = Direction.North; // Okay
  sample = 'North'; // Okay
//   sample = 'AnythingElse'; // ERROR!

type Test = {
    foo: 'foo';
    age?: number;
}

type TestReadOnly = Readonly<Test>

type MyReadOnly<T> = {
    readonly [P in keyof T] : P
}

type MyTestReadOnly = MyReadOnly<Test>

let test: Test = {
    foo: 'foo'
}


let readOnlyArray: ReadonlyArray<number> = [1,23,3,3,3]
// readOnlyArray[0] = 1



function CardItem(item: CardProps[], value = '12'): CardProps[] {
    return item
}

const Items = 
    [
        {
            id: 1,
            title: 'title1',
            context: 'sha',
            age: '12'
        }
    ]


CardItem(Items,'a')

CardItem([
    {
        id: 1,
        title: 'title1',
        context: 'sha',
        age: '12'
    } as CardProps
]) 

type Bar = {
    [index: number]: string;
    // [str: string]: number | string; 
}

type Index = 'a' | 'b' | 'c'

type FormIndex = {
    [str: string]: number;
    // [index: number]: string;
}

const obj: FormIndex = {
    a: 1,
    b: 2,
    d: 2,
}

let arr: Bar = ['1','2'];

global1 = 12

const Demo1 = memo(function({name, loading}: IProps) {
    console.log('demi1')

    return <span>{name}</span>
})

const Demo2 = function({name, loading}: IProps) {
    console.log('demi2')
    const context = useMemo(() => {
        // return 
        // console.log('demi2'
        return name
    }, [name])
    return <span>{context}</span>
}

const HelloHooks = () => {
    const [load, setLoad] = useState(false);
    const [name, setName] = useState('lhr')
    const [a, setA] = useState('a')
    return <Fragment>
        <Demo1 loading = {load} name = {name}/>
        <Demo2 loading = {load} name = {name}/>
        <button onClick = {() => {setA(a+'1')}}>a</button>
        <button onClick={ () => setName(name)}>name</button>
        <button onClick = {() => {setLoad(!load)}}>load</button>
    </Fragment>
}


interface Point2D {
    x: number;
    y: number;
  }
  
  interface Point3D {
    x: number;
    y: number;
    z: number;
  }
  
  const point2D: Point2D = { x: 0, y: 10 };
  const point3D: Point3D = { x: 0, y: 10, z: 20 };
  function iTakePoint2D(point: Point2D) {
    /* do something */
  }
  
  iTakePoint2D(point2D); // ok, 完全匹配
  iTakePoint2D(point3D); // 额外的信息，没关系
  iTakePoint2D({ x: 0, y: 12}); 


// let err: never = (() => {
//     whi
//     // throw new Error('aaa')
//     // return  'a' 
// })()

export default HelloHooks