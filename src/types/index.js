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
  conditionType: oneOf(['equals', 'greaterThan', 'lessThan']).isRequired,
  conditionValue: oneOfType([bool, string, number]).isRequired,
  subnodeId: number.isRequired
});

// propType
export const formBuilderNodeType = shape({
  id: number.isRequired,
  type: oneOf(['bool', 'string', 'number']).isRequired,
  question: string.isRequired,
  subnodes: arrayOf(formBuilderConditonType.isRequired).isRequired
});

export const rootNodesListType = arrayOf(number);
