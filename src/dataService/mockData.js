export const sampleNodes = [
  {
    id: 1,
    questionText: 'Do You own a car?',
    inputType: 'BOOL',
    subnodes: [4]
  },
  {
    id: 2,
    questionText: 'What year was your building built?',
    inputType: 'NUMBER',
    subnodes: []
  },
  {
    id: 3,
    questionText: 'What\'s your company name?',
    inputType: 'TEXT',
    subnodes: []
  },
  {
    id: 4,
    conditionType: 'EQUALS',
    conditionValue: true,
    questionText: 'What is your cars\'s model?',
    inputType: 'TEXT',
    subnodes: [5, 6, 7]
  },
  {
    id: 5,
    conditionType: 'EQUALS',
    conditionValue: 'Ford',
    questionText: 'What color is your Ford?',
    inputType: 'TEXT',
    subnodes: []
  },
  {
    id: 6,
    conditionType: 'EQUALS',
    conditionValue: 'Ford',
    questionText: 'How many wheels on your Ford?',
    inputType: 'NUMBER',
    subnodes: [8]
  },
  {
    id: 7,
    conditionType: 'EQUALS',
    conditionValue: 'Toyota',
    questionText: 'Has your Toyota been recalled?',
    inputType: 'BOOL',
    subnodes: []
  },
  {
    id: 8,
    conditionType: 'GREATER_THAN',
    conditionValue: 4,
    questionText: 'Is your Ford road legal?',
    inputType: 'BOOL',
    subnodes: []
  }
];

export const sampleForm = {
  title: 'Sample Form',
  rootNodes: [1, 2, 3]
};
