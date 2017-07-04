const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve, seconds * 1000);
    });
};
const f = async() => {
    await wait(5);
    console.log('It workds');
}