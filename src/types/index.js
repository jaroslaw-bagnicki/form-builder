import { shape, bool, number, string, oneOfType, oneOf, arrayOf } from 'prop-types';

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

export const conditionTypesLists = {
  boolean: allConditonTypes.filter(type => type.key === 'EQUALS' ),
  number: allConditonTypes.filter(type => type.key === 'EQUALS' || 'GREATER_THAN' || 'LESS_THAN'),
  string: allConditonTypes.filter(type => type.key === 'EQUALS')
};

// propType
export const dbIdType = number;

// propType
export const templateType = shape({
  id: dbIdType.isRequired,
  title: string.isRequired,
  description: string,
  rootNodes: arrayOf(dbIdType)
});

// propType
export const nodeType = shape({
  id: dbIdType.isRequired,
  conditionType: oneOf(allConditonTypes.map(type => type.key)),
  conditionValue: oneOfType([bool, string, number]),
  questionText: string.isRequired,
  inputType: oneOf(inputTypesList.map(type => type.key)).isRequired,
  subnodes: arrayOf(dbIdType)
});
