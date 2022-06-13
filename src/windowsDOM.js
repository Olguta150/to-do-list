export function newProject() {
    const container = document.querySelector('.container');

    const darkBackground = document.createElement('div');
    darkBackground.classList.add('dark-background');
    container.appendChild(darkBackground);

    const newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project-container');
    container.appendChild(newProjectContainer);

    const newField = document.createElement('div');
    newField.classList.add('new-field');
    newProjectContainer.appendChild(newField);
    
    const newLabel  = document.createElement('label');
    newLabel.setAttribute('for', 'name');
    newLabel.innerHTML = 'Name:';
    newField.appendChild(newLabel);
    
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'name');
    newInput.setAttribute('id', 'name');
    newField.appendChild(newInput);

    const newBtns = document.createElement('div');
    newBtns.classList.add('new-btns');
    newProjectContainer.appendChild(newBtns);

    const addBtn = document.createElement('button');
    addBtn.classList.add('project-add-btn', 'project-btn');
    addBtn.textContent = 'Add';
    newBtns.appendChild(addBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('project-cancel-btn', 'project-btn');
    cancelBtn.textContent = 'Cancel';
    newBtns.appendChild(cancelBtn);

}