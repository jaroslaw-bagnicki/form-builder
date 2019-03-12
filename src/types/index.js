import { shape, bool, number, string, oneOfType, oneOf, arrayOf, objectOf } from 'prop-types';
import { allConditons, inputTypesList } from '../helpers';

export const nodeIdType = number;

export const nodeType = shape({
  id: nodeIdType.isRequired,
  conditionType: oneOf(allConditons.map(type => type.key)),
  conditionValue: oneOfType([bool, string, number]),
  questionText: string.isRequired,
  inputType: oneOf(inputTypesList.map(type => type.key)).isRequired,
  subnodes: arrayOf(nodeIdType)
});

export const templateType = shape({
  isLoading: bool.isRequired,
  slug: string.isRequired,
  title: string.isRequired,
  description: string,
  rootNodes: arrayOf(nodeIdType),
  nodes: objectOf(nodeType),
  nextId: nodeIdType 
});
