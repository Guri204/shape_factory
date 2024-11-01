'use strict';

const shapes = [];
const maxShapes = 15;

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo() {
        return `${this.color} ${this.name}`;
    }
}

function createShape() {
    const shapeContainer = document.getElementById('shapeContainer');
    const info = document.getElementById('info');
    const shapeDetails = document.getElementById('shapeDetails');

    if (shapes.length >= maxShapes) {
        info.textContent = "The box is full!";
        return;
    }

    info.textContent = "";

    const shapeType = document.getElementById('shapeSelect').value;
    const color = document.getElementById('colorSelect').value;
    
    const newShape = new Shape(shapeType, color);
    shapes.push(newShape);

    updateShapeContainer();
    
    updateShapeDetails();
}

function updateShapeContainer() {
    const shapeContainer = document.getElementById('shapeContainer');
    shapeContainer.innerHTML = shapes.map((shape, index) => {
        return (`<div class="shape ${shape.name} ${shape.color}" 
            onclick="displayInfo('Unit ${index + 1}: ${shape.getInfo()}')"></div>`);
    }).join('');
}

function updateShapeDetails() {
    const shapeDetails = document.getElementById('shapeDetails');
    shapeDetails.innerHTML = shapes.map((shape, index) => {
        return (`<p>Unit ${index + 1}: ${shape.name} - ${shape.color}</p>`);
    }).join('');
}

function displayInfo(info) {
    document.getElementById('info').textContent = (`Selected shape: ${info}`);
}

document.getElementById('createButton').addEventListener('click', createShape);