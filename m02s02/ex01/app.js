const form = document.getElementById('personForm');
const personDisplayClass = 'personDisplay';
const existingFieldset = form.querySelector('fieldset:nth-child(2)');

existingFieldset.append(renderSkillInput());

// hoisted
// returns (input and button)
function renderSkillInput() {
  const container = new DocumentFragment();
  const skillInput = document.createElement('input');
  skillInput.type = 'text';
  skillInput.placeholder = 'Adauga Skill';
  skillInput.classList.add('addSkill');
  const skillInputButton = document.createElement('button');
  skillInputButton.title = 'Adauga Skill';
  skillInputButton.innerText = '+';

  skillInputButton.addEventListener('click', function (event) {
    const button = event.currentTarget;
    const skillInput = button.previousElementSibling;
    const skillValue = skillInput.value;
    if (skillValue.trim().length < 1) {
      return;
    }

    button.after(renderSkillsUl(skillValue));
  });

  // placeholder

  container.append(skillInput);
  container.append(skillInputButton);

  return container;
}

function renderSkillsUl(skillName) {
  const className = 'skillsUl';
  let skillsUl = document.querySelector('.' + className);

  if (skillsUl === null) {
    skillsUl = document.createElement('ul');
    skillsUl.classList.add(className);
  }

  const skillLi = document.createElement('li');
  skillLi.innerText = skillName;

  const deleteSkillButton = document.createElement('button');
  deleteSkillButton.type = 'button';
  deleteSkillButton.innerText = 'Sterge';
  deleteSkillButton.title = 'Sterge Skill';
  deleteSkillButton.classList.add('deleteSkillButton');

  skillLi.append(deleteSkillButton);

  skillsUl.append(skillLi);

  return skillsUl;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const person = {};
  // currentTarget => obiectul de DOM pe care s-a rulat
  // addEventlistener
  const form = event.currentTarget;

  person.name = form.name.value;
  person.surname = form.surname.value;
  person.age = form.age.value;

  clearDisplay();
  const personDisplay = render(person);
  form.after(personDisplay);

  form.reset();
});

form.addEventListener('click', function (event) {
  // obtain button from DOM
  // target este obiectul DE PE CARE A PLECAT
  // evenimentul
  const target = event.target;
  // check if actual button
  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('deleteSkillButton')
  ) {
    // return early
    return;
  }
  // DOM traversal
  const deleteSkillButton = target;
  // button.parentElement.remove()
  deleteSkillButton.parentElement.remove();
});

// hoisted
function clearDisplay() {
  const display = document.querySelector('.' + personDisplayClass);

  if (display !== null) {
    display.remove();
  }
}

function render(person) {
  // in memory
  const personDisplay = document.createElement('div');
  personDisplay.classList.add(personDisplayClass);

  personDisplay.append(renderPerson(person));

  return personDisplay;
}

// hoisting - a ridica
function renderPerson(person) {
  const paragraph = document.createElement('p');

  paragraph.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraph;
}
