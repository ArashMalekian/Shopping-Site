export const shorter = (title) => {
    const howshorting = title.split(" ");
    const doshort = `${howshorting[0]} ${howshorting[1]}`;
    return doshort
}

export const splitter = (description) => {
  const  howSplitting = description.split(", ");
    
    return howSplitting;
}

export const isIn = (state , id) => {
    const result = !!state.selected.find(item => item.id === id);
    return result
}

export const quantityCount = (state , id ) => {
    const indexq = state.selected.findIndex(item => item.id === id);
    if(indexq === -1){
        return false
    } else{
        return state.selected[indexq].quantity;
    }
}