// we want to almost always use types unless you want to merge types then use an interface
declare type ComplexObject = {
  key: string,
  number: number,
  enum: 'one' | 'two' | 'three',
  newKey?: boolean,
}

// types can be used in may ways as primitives or heftier data structures like above 
declare type AddressLine1 = string | number;