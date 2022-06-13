import { newProject } from "./windowsDOM";

export function addNewProjectPopUp() {
    const addNewProject = document.querySelector('.add-new-project-btn');

    addNewProject.addEventListener('click', newProject);
}