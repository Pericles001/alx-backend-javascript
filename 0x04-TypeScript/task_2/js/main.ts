interface DirectorInterface {
    workFromHome(): string

    getCoffeeBreak(): string

    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string

    getCoffeeBreak(): string

    workTeacherTasks(): string
}

export class Director implements DirectorInterface {

    getCoffeeBreak = (): string => "Getting a coffee break";

    workDirectorTasks = (): string => "Getting to director tasks";

    workFromHome = (): string => "Working from home";

}

export class Teacher implements TeacherInterface {
    getCoffeeBreak = (): string => "Cannot have a break";

    workFromHome = (): string => "Cannot work from home";

    workTeacherTasks = (): string => "Getting to work";

}

const createEmployee = (salary: number | string) : Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

