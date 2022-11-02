import { Invoice } from "./modules/invoice.js";
import { Payments } from "./modules/Payments.js";
import { ListTemplate } from "./modules/ListTemplate.js";
// list templare instances
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
/*
// GENERIC
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docONe = addUID({ name: 'chris', age: 25 })
console.log(docONe.age);

interface Resource<T> {
    uid: number
    resourceName: string
    data: T
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'Person',
    data: 'chris'
} */
/*
// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number
    resourceName: ResourceType
    data: T
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: 'chris'
}
const docTwo: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: 'chris', age: 25 }
}
console.log(docTwo, docThree);

*/ 
