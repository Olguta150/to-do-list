import { container } from 'webpack';
import {Project} from './project.js';
import {projectLocalStorage} from './storage.js';

class UI {

    addTaskForm() {
        const container = document.querySelector('.container');
        const containerFormTask = document.createElement('div');
        const form = document.createElement('div');
        form.innerHTML = `
            <div>
                <label for="title">Task:</label>
                <input type="text" id="title" name="title">
            </div>
            <div>
                <label for="description">Description:</label>
                <input type="text" id="description" name="description">
            </div>
            <div>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date">
            </div>
            <div>
                <label for="priority">Priority:</label>
                <select id="priority" name="priority">
                    <option value="select" disabled>--Select--</option>
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div class="task-btns">
                <button class="cancel-task task-button">Cancel</button>
                <button class="add-task task-button">Add</button>
            </div>
        `;
        form.classList.add('form-task');
        containerFormTask.classList.add('container-form-task');
        containerFormTask.appendChild(form);
        container.appendChild(containerFormTask);
    }

    addProjectForm() {
        const container = document.querySelector('.container');
        const containerFormProject = document.createElement('div');
        const form = document.createElement('form');
        form.innerHTML = `
            <div class="form-details">
                <label for="name">Name:</label>
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
        setTimeout(() => form.removeChild(message), 3000);
    }
    
    removeProjectForm() {
        const containerFormProject = document.querySelector('.container-form-project');
        containerFormProject.remove();
    }

    removeTaskForm() {
        const containerTaskProject = document.querySelector('.container-form-task');
        containerTaskProject.remove();
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
        if(e.target.matches('.add-new-task')) {
            e.preventDefault();
            ui.addTaskForm();
        }
        if(e.target.matches('.cancel-task')) {
            e.preventDefault();
            ui.removeTaskForm();
        }
    })
}

export {eventsDOM};