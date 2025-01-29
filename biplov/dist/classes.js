"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ClassesExample() {
    class vehicle {
        constructor(Name) {
            this.Name = Name;
        }
        canRun() {
            console.log(`${this.Name}can run with wheels`);
        }
    }
    const mercedes = new vehicle("mercedes");
    mercedes.canRun();
    //another example
    class person {
        constructor(std_id, name) {
            this.std_id = std_id;
            this.name = name;
        }
        isPresent() {
            console.log(`${this.std_id}. ${this.name} is absent`);
        }
    }
    const student = new person(123, "prerana");
    student.isPresent();
}
exports.default = ClassesExample;
