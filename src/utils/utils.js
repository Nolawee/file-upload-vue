// utils.js

// utils to delay promises
function wait(ms) {
  return (x) => {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

export { wait }
