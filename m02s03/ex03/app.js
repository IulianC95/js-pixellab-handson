// black box function with no side effects
function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;
  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let edgeCounter = 0;

const mouseStateLog = createLog('Mouseul nu este pe scena.');
mouseStateLog.classList.add('mouse-state');
logsContainer.appendChild(mouseStateLog);

function updateMouseStateLog(isMouseOver) {
  const log = logsContainer.querySelector('.mouse-state');
  log.innerText = isMouseOver
    ? 'Mouseul este pe scena.'
    : 'Mouseul nu este pe scena.';
}

function updateEdgeCounterLog() {
  edgeCounter += 1;
  const existingEdgeLog = logsContainer.querySelector('.edge-counter-log');
  if (existingEdgeLog) {
    existingEdgeLog.innerText = `Mouseul a trecut peste laturile patratului de ${edgeCounter} ori.`;
  } else {
    const edgeLog = createLog(
      `Mouseul a trecut peste laturile patratului de ${edgeCounter} ori.`,
    );
    edgeLog.classList.add('edge-counter-log');
    logsContainer.appendChild(edgeLog);
  }
}

stage.addEventListener('mouseover', function () {
  counter += 1;
  updateMouseStateLog(true);
  updateEdgeCounterLog();

  const existingCounterLog = logsContainer.querySelector('.counter-log');
  if (existingCounterLog) {
    existingCounterLog.innerText = `Mouseul a fost pe scena de ${counter} ori.`;
  } else {
    const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori.`);
    counterLog.classList.add('counter-log');
    logsContainer.appendChild(counterLog);
  }
});

stage.addEventListener('mouseout', function () {
  updateMouseStateLog(false);
  updateEdgeCounterLog();
});
