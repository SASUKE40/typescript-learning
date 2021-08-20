const ENUM_OBJECT: {
  [key: string]: any
} = {
  1: 'value1',
  2: 'value2',
  3: 'value3',
  'aaa': 'aaa',
}; 


type A = keyof typeof ENUM_OBJECT;

ENUM_OBJECT['bbb'] = 'bbb';

const getValueByKey = (key: A) => ENUM_OBJECT[key];