import { shape, bool, number, string, oneOfType, oneOf, arrayOf } from 'prop-types';

const formBuilderConditonType = shape({
  conditionType: oneOf(['equals', 'greaterThan', 'lessThan']).isRequired,
  conditionValue: oneOfType([bool, string, number]).isRequired,
  subnodeId: number.isRequired
});

export const formBuilderNodeType = shape({
  id: number.isRequired,
  type: oneOf(['bool', 'text', 'number']).isRequired,
  question: string.isRequired,
  subnodes: arrayOf(formBuilderConditonType.isRequired).isRequired
});

export const rootNodesListType = arrayOf(number);
