import { shape, bool, number, string, oneOfType, oneOf, arrayOf } from 'prop-types';

// Dictionary
export const inputTypesDict = {
  bool: 'Yes/No',
  string: 'Text',
  number: 'Number'
};

// Dictionary
export const conditonTypesDict = {
  equals: 'Equals',
  greaterThan: 'Graten than',
  lessThan: 'Less than'
};

// propType
export const formBuilderConditonType = shape({
  type: oneOf(['equals', 'greaterThan', 'lessThan']).isRequired,
  value: oneOfType([bool, string, number]).isRequired
});

// propType
export const formBuilderNodeType = shape({
  id: number.isRequired,
  type: oneOf(['bool', 'string', 'number']).isRequired,
  question: string.isRequired,
  subnodes: arrayOf(shape({
    condition: formBuilderConditonType.isRequired,
    nodeId: number
  })).isRequired
});

export const rootNodesListType = arrayOf(number);
