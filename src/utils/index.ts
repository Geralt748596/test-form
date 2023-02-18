import { ClassItem } from "../types";


export function required (value: string, field: string) {
    return (value && value.length) ? '' : `${field} is required`;
};

export function emailValidation (value: string) {
    return value?.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) ? '' : 'Wrong email';
};

const mediumPasswordREgExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

export function passwordValidation (value: string) {
    return value?.match(mediumPasswordREgExp) ? '' : 'Password not strong enough';
}

export function cn(...classes: ClassItem[]) {
    let results: string = '';
    classes.forEach((classItem) => {
        if (typeof classItem === 'string') {
            results += `${classItem} `;
        } else {
            Object.keys(classItem).forEach((className) => {
                if (classItem[className]) {
                    results += `${className} `;
                }
            })
        }
    })
    
    return results.trim();
};


