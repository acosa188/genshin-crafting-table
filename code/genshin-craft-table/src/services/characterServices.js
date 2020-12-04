
export const baseCharacterStats = (name) => {
    const file = require(`../data/characters/${name}`);

    if(!file) return;

    return file;
} 

