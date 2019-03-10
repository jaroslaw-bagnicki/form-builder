const initState = {
  isLoading: false,
  error: null,
  nodes: [
    {
      id: 1,
      question: 'Do You own a car?',
      type: 'bool',
      subnodes: [
        {
          condition: {
            type: 'equals',
            value: true
          },
          nodeId: 4
        }
      ]
    },
    {
      id: 2,
      question: 'What year was your building built?',
      type: 'number',
      subnodes: []
    },
    {
      id: 3,
      question: 'What\'s your company name?',
      type: 'string',
      subnodes: []
    },
    {
      id: 4,
      question: 'What is your cars\'s model?',
      type: 'string',
      subnodes: [
        {
          condition: {
            type: 'equals',
            value: 'Ford'
          },
          nodeId: 5
        },
        {
          condition: {
            type: 'equals',
            value: 'Ford'
          },
          nodeId: 6
        },
        {
          condition: {
            type: 'equals',
            value: 'Toyota'
          },
          nodeId: 7
        }
      ]
    },
    {
      id: 5,
      question: 'What color is your Ford?',
      type: 'string',
      subnodes: []
    },
    {
      id: 6,
      question: 'How many wheels on your Ford?',
      type: 'number',
      subnodes: [
        {
          condition: {
            type: 'greaterThan',
            value: 4
          },
          nodeId: 8
        }
      ]
    },
    {
      id: 7,
      question: 'Has your Toyota been recalled?',
      type: 'bool',
      subnodes: []
    },
    {
      id: 8,
      question: 'Is your Ford road legal?',
      type: 'bool',
      subnodes: []
    }
  ],
  rootNodesList: [1, 2, 3]
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'DATA_LOAD_START':
      return {
        ...state,
        isLoading: true
      };

    case 'DATA_LOAD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null
      };
    
    case 'DATA_LOAD_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Loading data faild.'
      };

    default:
      return state;
  }
};
