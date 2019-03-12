// Dictionary
export const inputTypesList = [
  { key: 'BOOL', label: 'Yes/No' },
  { key: 'NUMBER', label: 'Number' },
  { key: 'TEXT', label: 'Text' }
];

// Dictionary
export const allConditons = [
  { key: 'EQUALS', label: 'Equals' },
  { key: 'GREATER_THAN', label: 'Graten than' },
  { key: 'LESS_THAN', label: 'Less than' }
];

// Dictionary
export const conditionTypesLists = {
  boolean: allConditons.filter(type => type.key === 'EQUALS' ),
  number: allConditons.filter(type => type.key === 'EQUALS' || 'GREATER_THAN' || 'LESS_THAN'),
  string: allConditons.filter(type => type.key === 'EQUALS')
};

// Dictionary
export const defaultConditon = {
  BOOL: { conditionType: 'EQUALS', conditionValue: true },
  NUMBER: { conditionType: 'EQUALS', conditionValue: 0 },
  TEXT: { conditionType: 'EQUALS', conditionValue: '' }
};

// Function
export const emptyNode = (id, condition) => ({
  id: id,
  ...condition,
  questionText: '',
  inputType: 'BOOL',
  subnodes: []
});

// Function
export const findNodesToRemove = (id, nodes, arr = []) => {
  arr.push(id);
  nodes[id].subnodes.forEach(id => findNodesToRemove(id, nodes, arr));
  return arr;
};
