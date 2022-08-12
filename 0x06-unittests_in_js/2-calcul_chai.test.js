const assert = require('assert');
const { expect } = require('chai');
const { it, describe, test } = require('mocha');
const calculateNumber = require('./1-calcul');


test('should output a correct number 1', () => {
    res = calculateNumber('SUM', 1.4, 4.5);
    expect(6);
});

test('should output a correct number 2', () => {
    res = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(-4);
});

test('should output a correct number 3', () => {
    res = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(0.2);
});

test('checking correct type for operation 1', () => {
    res = calculateNumber(5, 1.4, 4.5);
    expect('Error');
});

test('checking correct type for operation 2', () => {
    res = calculateNumber('plus', 1.4, 4.5);
    expect('Error');
});
