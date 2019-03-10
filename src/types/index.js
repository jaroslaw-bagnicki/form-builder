import { shape, bool, number, string, oneOfType, oneOf, arrayOf } from 'prop-types';

// Dictionary
export const inputTypesList = [
  { key: 'bool', label: 'Yes/No' },
  { key: 'string', label: 'Text' },
  { key: 'number', label: 'Number' }
];

// Dictionary
const allConditonTypes = [
  { key: 'equals', label: 'Equals' },
  { key: 'greaterThan', label: 'Graten than' },
  { key: 'lessThan', label: 'Less than' }
];

export const conditionTypesLists = {
  bool: allConditonTypes.filter(type => type.key === 'equals' ),
  number: allConditonTypes.filter(type => type.key === 'equals' || 'greaterThan' || 'lessThan'),
  string: allConditonTypes.filter(type => type.key === 'equals')
};

// propType
export const nodeIdType = number;

// propType
export const formBuilderConditonType = shape({
  type: oneOf(allConditonTypes.map(type => type.key)).isRequired,
  value: oneOfType([bool, string, number]).isRequired,
  valueType: string
});

// propType
export const formBuilderNodeType = shape({
  id: number.isRequired,
  condition: formBuilderConditonType,
  type: oneOf(inputTypesList.map(type => type.key)).isRequired,
  question: string.isRequired,
  subnodes: arrayOf(nodeIdType)
});
