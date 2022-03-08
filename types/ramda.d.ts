// eslint-disable max-line-length

declare module 'ramda' {
  class Lens<S, A> {
    private _tag: 'Lens'
    private _S: S
    private _A: A
    private constructor()
  }

  type Pred<T> = (value: T) => boolean
  type ObjPred<T> = (value: T[keyof T], key: keyof T) => boolean
  type Comparator<T> = (v1: T, v2: T) => number
  type Path = Array<string | number>

  type Evolver<T> = ((x: T) => T) | { [K in keyof T]?: Evolver<T[K]> }

  function add(n: number): (n: number) => number
  function add(n: number, n2: number): number

  const addIndex: any

  function adjust<T>(fn: (x: T) => T, index: number, arr: T[]): T[]

  function ascend<T>(fn: (x: T) => any): Comparator<T>

  function all<T>(predicate: Pred<T>, xs: T[]): boolean
  function all<T>(predicate: Pred<T>): (xs: T[]) => boolean

  function all<T>(fn: (t: T) => boolean, t2: T[]): boolean // eslint-disable-line @typescript-eslint/unified-signatures

  function always<T>(value: T): (...args: any[]) => T

  function any<T>(predicate: Pred<T>, t2: T[]): boolean
  function any<T>(predicate: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean

  function append<T>(x: T, xs: T[]): T[]
  function append<T>(x: T): (xs: T[]) => T[]

  function assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U
  function assoc<K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U
  function assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U

  function assocPath<T>(path: Path, val: any, obj: T): T
  function assocPath<T>(path: Path, val: any): (obj: T) => T

  function chain<T, U>(fn: (t: T) => U[], xs: ReadonlyArray<T>): U[]
  function chain<T, U>(fn: (t: T) => U[]): (xs: ReadonlyArray<T>) => U[]

  function clone<T>(t: T): T

  function concat<T>(t1: T[], t2: T[]): T[]
  function concat<T>(t1: T[]): (t2: T[]) => T[]

  function complement<T>(fn: (...args: T[]) => boolean): (...args: T[]) => boolean

  function compose<T1, T2, T3>(l1: Lens<T1, T2>, l2: Lens<T2, T3>): Lens<T1, T3>
  function compose<T1, T2, T3, T4>(l1: Lens<T1, T2>, l2: Lens<T2, T3>, l3: Lens<T3, T4>): Lens<T1, T4>

  function compose<V0, T1, T2, T3, T4>(
    fn0: (x: T3) => T4,
    fn1: (x: T2) => T3,
    fn2: (x: T1) => T2,
    fn3: (x: V0) => T1
  ): (x: V0) => T4

  function contains<T>(x: T, xs: T[]): boolean
  function contains<T>(x: T): (xs: T[]) => boolean

  const converge: any

  /**
   * Counts the elements of a list according to how many match each value
   * of a key generated by the supplied function. Returns an object
   * mapping the keys produced by `fn` to the number of occurrences in
   * the list. Note that all keys are coerced to strings because of how
   * JavaScript objects work.
   * Copied from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/ramda/index.d.ts
   */
  function countBy<T>(fn: (a: T) => string | number, list: ReadonlyArray<T>): { [index: string]: number }
  function countBy<T>(fn: (a: T) => string | number): (list: ReadonlyArray<T>) => { [index: string]: number }

  function descend<T>(fn: (x: T) => any): Comparator<T>

  function difference<T>(list1: T[], list2: T[]): T[]
  function difference<T>(list1: T[]): (list2: T[]) => T[]

  function differenceWith<T>(pred: (t1: T, t2: T) => boolean, list1: T[], list2: T[]): T[]

  function dissoc<T, K extends keyof T>(key: K, obj: T): T
  function dissoc(prop: string): <U>(obj: any) => U

  function dissocPath<T>(path: Path, obj: T): T

  const divide: any

  function drop<T>(n: number, xs: T[]): T
  function drop(n: number): <T>(xs: T[]) => T

  function equals<T>(v1: T, v2: T): boolean
  function equals<T>(v1: T): (v2: T) => boolean

  function evolve<V>(transformations: Evolver<V>, obj: V): V
  function evolve<V>(transformations: Evolver<V>): <W extends V>(obj: W) => W

  function find<T>(predicate: Pred<T>, xs: ReadonlyArray<T>): T | undefined

  function findLast<T>(predicate: Pred<T>, xs: ReadonlyArray<T>): T | undefined

  function findIndex<T>(predicate: Pred<T>, xs: T[]): number

  function filter<T>(fn: (value: T) => boolean): (list: T[]) => T[]
  function filter<T>(fn: (value: T) => boolean, list: T[]): T[]

  function flatten<T>(arrays: T[][]): T[]

  function flip<A1, A2, AR>(f: (a: A1, b: A2) => AR): (b: A2, a: A1) => AR

  function forEachObjIndexed<T, U>(fn: (t: T[keyof T], k: keyof T) => void, obj: T): void

  function fromPairs<T, K extends string>(pairs: Array<[K, T]>): Record<K, T>

  function groupBy<T, K extends string | number>(fn: (t: T) => K, arr: ReadonlyArray<T>): Record<K, T[]>
  function groupBy<T, K extends string | number>(fn: (t: T) => K): (arr: ReadonlyArray<T>) => Record<K, T[]>

  function has<T>(s: string, obj: T): boolean
  function has(s: string): <T>(obj: T) => boolean

  function head<T>(xs: ReadonlyArray<T>): T | undefined

  function identity<T>(value: T): T

  function init<T>(xs: T[]): T[]

  function intersection<T>(xs: T[], ys: T[]): T[]

  function indexBy<T, K extends string>(fn: (t: T) => K, arr: T[]): Record<K, T>
  function indexBy<T, K extends string>(fn: (t: T) => K): (arr: T[] | Record<K, T>) => Record<K, T>

  function indexOf<T>(value: T, values: ReadonlyArray<T>): number

  function isEmpty(value: any): boolean

  function isNil(value: any): boolean

  function keys<T>(obj: T): Array<keyof T>

  function last<T>(xs: T[]): T

  function length(...args: any[]): number

  function lens<S, A>(getter: (source: S) => A, setter: (value: A, source: S) => S, dummy?: S): Lens<S, A>

  function lensIndex<T>(index: number, dummy?: T): Lens<T[], T>

  function lensProp<T, K extends keyof T>(prop: K, dummy?: T): Lens<T, T[K]>

  function lensPath<T, U>(path: Path, dummy?: T): Lens<T, U>

  type RecordValue<T extends Record<any, any>> = T extends Record<any, infer K> ? K : never
  type ArrayValue<T extends ReadonlyArray<any>> = T extends ReadonlyArray<infer K> ? K : never

  function map<T, U>(fn: (t: T) => U, arr: T[]): U[]
  function map<T, U>(fn: (t: T[keyof T]) => U, obj: T): Record<keyof T, U>
  function map<T extends ReadonlyArray<any>, U>(fn: (t: ArrayValue<T>) => U): (t: T) => U[]
  function map<T extends object, U>(fn: (t: T[keyof T]) => U): (t: T) => Record<keyof T, U>

  function mapObjIndexed<T, U>(fn: (t: T[keyof T], k: keyof T) => U, obj: T): Record<keyof T, U>
  function mapObjIndexed<T, U>(fn: (t: T[keyof T], k: keyof T) => U): (obj: T) => Record<keyof T, U>

  function merge<T1, T2>(t1: T1, t2: T2): T1 & T2
  function merge<T1>(t1: T1): <T2>(t2: T2) => T1 & T2

  function mergeAll<T1, T2, T3, T4, T5, T6>(values: [T1, T2, T3, T4, T5, T6]): T1 & T2 & T3 & T4 & T5 & T6
  function mergeAll<T1, T2, T3, T4, T5>(values: [T1, T2, T3, T4, T5]): T1 & T2 & T3 & T4 & T5
  function mergeAll<T1, T2, T3, T4>(values: [T1, T2, T3, T4]): T1 & T2 & T3 & T4
  function mergeAll<T1, T2, T3>(values: [T1, T2, T3]): T1 & T2 & T3
  function mergeAll<T1, T2>(values: [T1, T2]): T1 & T2
  function mergeAll<T1>(values: [T1]): T1
  function mergeAll<T>(values: T[]): T

  function mergeDeepRight<T1, T2>(a: T1, b: T2): T1 & T2

  function mergeWith<T1, T2>(fn: (a: any, b: any) => any, obj1: T1, obj2: T2): T1 & T2

  function mergeWithKey(...args: any[]): any

  function none<T>(fn: (a: T) => boolean, list: T[]): boolean
  function none<T>(fn: (a: T) => boolean): (list: T[]) => boolean

  function not(value: any): boolean

  function of<T>(t: T): T[]

  function omit<T, K extends keyof T>(keys: K[], value: T): T

  function once<T>(fn: (...args: any[]) => T): (...args: any[]) => T

  function over<S, A>(lens: Lens<S, A>, fn: (value: A) => A, source: S): S
  function over<S, A>(lens: Lens<S, A>, fn: (value: A) => A): (source: S) => S
  function over<S, A>(lens: Lens<S, A>): (fn: (value: A) => A) => (source: S) => S

  function path<T, U>(path: Path, value: T): U // eslint-disable-line @typescript-eslint/no-unused-vars
  function path<T, U>(path: Path): (value: T) => U

  function pathOr<T, U>(defaultValue: U, path: Path, value: T): U
  function pathOr<T, U>(defaultValue: U, path: Path): (value: T) => U

  function pick<T, K extends keyof T>(keys: K[], obj: T): Pick<T, K>
  function pick<T, K extends keyof T>(keys: K[]): (obj: T) => Pick<T, K>

  function pickAll<T, K extends keyof T>(keys: K[], obj: T): Pick<T, K>
  function pickAll<T, K extends keyof T>(keys: K[]): (obj: T) => Pick<T, K>

  function pickBy<T>(predicate: ObjPred<T>, obj: T): T

  function pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1
  function pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1
  function pipe<V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => T1): (x0: V0, x1: V1, x2: V2) => T1

  function pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2
  function pipe<V0, V1, T1, T2>(fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2): (x0: V0, x1: V1) => T2
  function pipe<V0, V1, V2, T1, T2>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2
  ): (x0: V0, x1: V1, x2: V2) => T2

  function pipe<V0, T1, T2, T3>(fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: V0) => T3
  function pipe<V0, V1, T1, T2, T3>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3
  ): (x0: V0, x1: V1) => T3
  function pipe<V0, V1, V2, T1, T2, T3>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3
  ): (x0: V0, x1: V1, x2: V2) => T3

  function pipe<V0, T1, T2, T3, T4>(
    fn0: (x: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4
  ): (x: V0) => T4
  function pipe<V0, V1, T1, T2, T3, T4>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4
  ): (x0: V0, x1: V1) => T4
  function pipe<V0, V1, V2, T1, T2, T3, T4>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4
  ): (x0: V0, x1: V1, x2: V2) => T4

  function pipe<V0, T1, T2, T3, T4, T5>(
    fn0: (x: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5
  ): (x: V0) => T5
  function pipe<V0, V1, T1, T2, T3, T4, T5>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5
  ): (x0: V0, x1: V1) => T5
  function pipe<V0, V1, V2, T1, T2, T3, T4, T5>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5
  ): (x0: V0, x1: V1, x2: V2) => T5

  function pipe<V0, T1, T2, T3, T4, T5, T6>(
    fn0: (x: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6
  ): (x: V0) => T6
  function pipe<V0, V1, T1, T2, T3, T4, T5, T6>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6
  ): (x0: V0, x1: V1) => T6

  function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6
  ): (x0: V0, x1: V1, x2: V2) => T6

  function pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
    fn0: (x: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn: (x: T6) => T7
  ): (x: V0) => T7

  function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7
  ): (x0: V0, x1: V1) => T7

  function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7
  ): (x0: V0, x1: V1, x2: V2) => T7

  function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
    fn0: (x: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn: (x: T7) => T8
  ): (x: V0) => T8

  function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8
  ): (x0: V0, x1: V1) => T8

  function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8
  ): (x0: V0, x1: V1, x2: V2) => T8

  function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn0: (x0: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9
  ): (x0: V0) => T9

  function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9
  ): (x0: V0, x1: V1) => T9

  function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9
  ): (x0: V0, x1: V1, x2: V2) => T9

  function pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn0: (x0: V0) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9,
    fn9: (x: T9) => T10
  ): (x0: V0) => T10

  function pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn0: (x0: V0, x1: V1) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9,
    fn9: (x: T9) => T10
  ): (x0: V0, x1: V1) => T10

  function pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn0: (x0: V0, x1: V1, x2: V2) => T1,
    fn1: (x: T1) => T2,
    fn2: (x: T2) => T3,
    fn3: (x: T3) => T4,
    fn4: (x: T4) => T5,
    fn5: (x: T5) => T6,
    fn6: (x: T6) => T7,
    fn7: (x: T7) => T8,
    fn8: (x: T8) => T9,
    fn9: (x: T9) => T10
  ): (x0: V0, x1: V1, x2: V2) => T10

  function partition<T>(predicate: Pred<T>, xs: ReadonlyArray<T>): [T[], T[]]
  function partition<T>(predicate: Pred<T>): (xs: ReadonlyArray<T>) => [T[], T[]]

  function prepend<T>(x: T, xs: T[]): T[]
  function prepend<T>(x: T): (xs: T[]) => T[]

  function prop<T, K extends keyof T>(k: K, t: T): T[K]
  function prop<T, K extends keyof T>(k: K): (t: T) => T[K]

  function propEq<T, K extends keyof T>(k: K, p: T[K], t: T): boolean
  function propEq<T, K extends keyof T>(k: K, p: T[K]): (t: T) => boolean

  function propOr<T, K extends keyof T>(defaultValue: T[K], prop: K, obj: Partial<T>): T[K]
  function propOr<T, K extends keyof T>(defaultValue: T[K], prop: K): (obj: Partial<T>) => T[K]

  function props<T, K extends keyof T>(keys: K[], obj: T): Array<T[K]>

  function pluck<T, K extends keyof T>(k: K, xs: T[]): Array<T[K]>
  function pluck<T>(k: keyof T): (xs: T[] | Record<any, T>) => Array<T[keyof T]>

  function range(start: number, end: number): number[]

  function reduce<T, U>(fn: (acc: U, elem: T, idx: number, xs: T[]) => U, initialValue: U, xs: T[]): U
  function reduce<T, U>(fn: (acc: U, elem: T, idx: number, xs: T[]) => U, initialValue: U): (xs: T[]) => U
  function reduce<T, U>(fn: (acc: U, elem: T, idx: number, xs: T[]) => U): (initialValue: U, xs: T[]) => U

  function reject<T>(predicate: Pred<T>, xs: T[]): T[]
  function reject<T>(predicate: Pred<T[keyof T]>, obj: T): T

  function remove<T>(start: number, count: number, xs: T[]): T[]
  function remove(start: number, count: number): <T>(xs: T[]) => T[]
  function remove(start: number): (count: number) => <T>(xs: T[]) => T[]

  function reverse<T>(xs: T[]): T[]

  function set<S, A>(lens: Lens<S, A>, value: A, source: S): S
  function set<S, A>(lens: Lens<S, A>, value: A): (source: S) => S
  function set<S, A>(lens: Lens<S, A>): (value: A) => (source: S) => S

  function set<T, U>(lens: Lens<T, U>, value: U, obj: T): T

  function sort<T>(fn: Comparator<T>, list: T[]): T[]
  function sort<T>(fn: Comparator<T>): (list: T[]) => T[]

  function sortBy<T>(fn: (value: T) => any, list: T[]): T[]
  function sortBy<T>(fn: (value: T) => any): (list: T[]) => T[]

  function sortWith<T>(comparators: ReadonlyArray<Comparator<T>>, list: ReadonlyArray<T>): T[]

  function split(sep: string | RegExp): (str: string) => string[]
  function split(sep: string | RegExp, str: string): string[]

  function splitEvery<T>(length: number, xs: T[]): T[][]
  function splitEvery(length: number): <T>(xs: T[]) => T[][]

  function splitWhen<T>(fn: (x: T) => boolean, xs: T[]): [T[], T[]]

  function sum(xs: readonly number[]): number

  function tail<T>(xs: T[]): T[]
  function trim(str: string): string

  function toLower(str: string): string
  function toPairs<T>(obj: T): Array<[keyof T, T[keyof T]]>

  function uniq<T>(xs: T[]): T[]

  function uniqBy<T>(fn: (x: T) => string | number, xs: ReadonlyArray<T>): T[]
  function uniqBy<T>(fn: (x: T) => string | number): (xs: ReadonlyArray<T>) => T[]

  function uniqWith<T>(fn: (x: T, y: T) => boolean, xs: T[]): T[]

  function unnest<T>(xs: T[][]): T[]
  function until<T>(f: (a: T) => boolean, step: (a: T) => T, init: T): T

  function update<T>(index: number, x: T, xs: T[]): T[]
  function update<T>(index: number, x: T): (xs: T[]) => T[]
  function update(index: number): <T>(x: T) => (xs: T[]) => T[]

  function values<T>(obj: T): Array<T[keyof T]>

  function view<S, A>(lens: Lens<S, A>, source: S): A
  function view<S, A>(lens: Lens<S, A>): (source: S) => A

  function without<T>(list1: T[], list2: T[]): T[]
  function without<T>(list1: T[]): (list2: T[]) => T[]

  function xprod<T, U>(list1: T[], list2: U[]): Array<[T, U]>
  function xprod<T>(list1: T[]): <U>(list2: U[]) => Array<[T, U]>

  function zip<T, U>(list1: T[], list2: U[]): Array<[T, U]>
  function zip<T>(list1: T[]): <U>(list2: U[]) => Array<[T, U]>

  function zipObj<K extends string, T>(list1: K[], list2: T[]): Record<K, T>
  function zipObj<K extends string>(list1: K[]): <T>(list2: T[]) => Record<K, T>

  function nth<T>(num: number): (list: ReadonlyArray<T>) => T

  function takeWhile<T>(predicate: (val: T) => boolean, list: ReadonlyArray<T>): T[]
  function takeWhile<T>(predicate: (val: T) => boolean): <T>(list: ReadonlyArray<T>) => T[]

  function tap<T>(fn: (a: T) => any, value: T): T
  function tap<T>(fn: (a: T) => any): (value: T) => T
}