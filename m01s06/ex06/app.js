function paragraphLog() {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.' + logContainerClass);
  let message = '';

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  for (let i = 0; i < arguments.length; i++) {
    message += arguments[i];
    if (i < arguments.length - 1) {
      message += ' ';
    }
  }

  const messageParagraph = document.createElement('p');
  messageParagraph.innerText = message;

  logContainer.append(messageParagraph);
}

console.log = paragraphLog;
console.log('Apar', 'in', 'document,', 'nu', 'in', 'consola');
