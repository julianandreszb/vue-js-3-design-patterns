async function stall(stallTime: number = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}

export {stall}