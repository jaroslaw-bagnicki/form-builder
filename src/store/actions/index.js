export const addNode = () => (dispatch) => {
  console.log('action addNode()');
};

export const addSubnode = (id) => (dispatch) => {
  console.log('action addNode()', id);
};

export const updateNode = (diff) => (dispatch) => {
  console.log('action updateNode()', diff);
};

export const deleteNode = (id) => (dispatch) => {
  console.log('action addSubnode()');
};

export const loadNodes = () => (dispatch) => {
  console.log('action deleteNode()');
};
