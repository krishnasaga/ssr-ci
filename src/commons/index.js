export const toCollection = (array) => {
    let collection = {};
      for (let index = 0; index < array.length; ++index)
        collection[array[index].id] = array[index];
    return collection;
  }
  
  export const __isSingleEntity = (data) => {
    return !Array.isArray(data);
  };
  
  export const __isMultipleEntities = (data) => {
      return Array.isArray(data);
  };
  
  export const __addSingleEntity = (collection,entity) => {
    return Object.assign({},collection,
      { [entity.id] : entity });
  };
  
  export const __addMultipleEntites = (collection,entities) => {
      return Object.assign({},collection,
        { ...toCollection(entities)});
    };
  
  export const __removeSingleEntity = (collection,id) => {
      const {[id] : remove,...remaining} = collection;
     return remaining;
  };

  export const __updateSingleEntity = (collection,entity) => {
    return Object.assign({},collection,
      { [entity.id] : entity });
  };
  
  
  export const createCollectionReducer = ({
      initialCollection = [],
      updateWhen = () => false,
      addWhen = () => false,
      removeWhen = () => false
  }) => {
    return (state = {
        collection: []
    },action) => {
      if(addWhen(action) && __isSingleEntity(action.data)){
        return Object.assign({},state,
          { 
            collection: __addSingleEntity(state.collection,action.data)
          });
      }else if(addWhen(action) && __isMultipleEntities(action.data)){
        return Object.assign({},state,
         { 
           collection: __addMultipleEntites(state.collection,action.data)
         });
      }else if(removeWhen(action) && __isSingleEntity(action.data)){
        return Object.assign({},state,
         {
           collection: __removeSingleEntity(state.collection,action.data)
         });
      }else if(updateWhen(action) && __isSingleEntity(action.data)){
        return Object.assign({},state,
         {
           collection: __updateSingleEntity(state.collection,action.data)
         });
      }
      return state;  
    };
  };
  
  export const selectCollection = (state) => {
    if(!state 
      ||!state.collection 
      || !Array.isArray(state.collection))
      return null;
    return Object.values(state.collection);
  };
