import { shape, bool, number, string, oneOfType, oneOf, arrayOf, objectOf } from 'prop-types';

// Dictionary
export const inputTypesList = [
  { key: 'BOOL', label: 'Yes/No' },
  { key: 'NUMBER', label: 'Number' },
  { key: 'TEXT', label: 'Text' }
];

// Dictionary
const allConditonTypes = [
  { key: 'EQUALS', label: 'Equals' },
  { key: 'GREATER_THAN', label: 'Graten than' },
  { key: 'LESS_THAN', label: 'Less than' }
];

// Dictionary
export const conditionTypesLists = {
  boolean: allConditonTypes.filter(type => type.key === 'EQUALS' ),
  number: allConditonTypes.filter(type => type.key === 'EQUALS' || 'GREATER_THAN' || 'LESS_THAN'),
  string: allConditonTypes.filter(type => type.key === 'EQUALS')
};

// Dictionary
export const defaultConditon = {
  BOOL: { conditionType: 'EQUALS', conditionValue: true },
  NUMBER: { conditionType: 'EQUALS', conditionValue: 0 },
  TEXT: { conditionType: 'EQUALS', conditionValue: '' }
};

// propType
export const nodeIdType = number;

// propType
export const nodeType = shape({
  id: nodeIdType.isRequired,
  conditionType: oneOf(allConditonTypes.map(type => type.key)),
  conditionValue: oneOfType([bool, string, number]),
  questionText: string.isRequired,
  inputType: oneOf(inputTypesList.map(type => type.key)).isRequired,
  subnodes: arrayOf(nodeIdType)
});

// propType
export const templateType = shape({
  slug: string,
  title: string,
  description: string,
  rootNodes: arrayOf(nodeIdType),
  nodes: objectOf(nodeType)
});
