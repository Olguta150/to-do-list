import { container } from 'webpack';
import {Project} from './project.js';
import {projectLocalStorage} from './storage.js';

class UI {
    addProjectForm() {
        const container = document.querySelector('.container');
        const containerFormProject = document.createElement('div');
        const form = document.createElement('form');
        form.innerHTML = `
            <div class="form-details">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="btns">
                <button class="cancel-project btn">Cancel</button>
                <button class="add-project btn">Add</button>
            </div>
        `;
        form.classList.add('form-project');
        containerFormProject.classList.add('container-form-project');
        containerFormProject.appendChild(form);
        container.appendChild(containerFormProject);
    }

    showMessageToForm(msg) {
        const form = document.querySelector('.form-project');
        const message = document.createElement('div');
        message.textContent = msg;
        message.classList.add('form-message');
        form.appendChild(message);
        setTimeout(() => form.removeChild(message), 2000);
    }
    
    removeProjectForm() {
        const containerFormProject = document.querySelector('.container-form-project');
    
        containerFormProject.remove();
        // containerFormProject.classList.add('none');
    }

    addNewProject(item) {
        const listProjects = document.querySelector('.menu-option-project-list');
        const newProject = document.createElement('li');
        console.log(`new project.....`, newProject);
        newProject.innerHTML = `<div class="list item"><i class="fa-solid fa-list"></i>${item.title}<i class="fa-solid fa-trash-can"></i></div>`;
        listProjects.appendChild(newProject);
    }
}

const eventsDOM = () => {
    const ui = new UI();
    document.addEventListener('click', (e) => {
        if(e.target.matches('.add-new-project-btn')) {
            ui.addProjectForm();
        }
        if(e.target.matches('.add-project')) {
            e.preventDefault();
            const form = document.querySelector('.form-project');
            const projectName = form.name.value;
            if(projectName === '') return ui.showMessageToForm('Project title can not be blank');
            if(projectName.length > 20) return ui.showMessageToForm('Project title can not be longer than 20 char');
            const newProject = new Project(projectName);
            ui.addNewProject(newProject);
            ui.removeProjectForm();
        }
        if(e.target.matches('.cancel-project')) {
            e.preventDefault();
            ui.removeProjectForm();
        }
    })
}

export {eventsDOM};