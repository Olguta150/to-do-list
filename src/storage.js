import { JavascriptModulesPlugin } from "webpack";
import { Project } from "./project";

const projectLocalStorage = (project) => {
    let projects;
    if(localStorage.getItem('projects') === null) {
        projects = [];
    } else {
        projects = JSON.parse(localStorage.getItem('projects'));
    }
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export {projectLocalStorage}