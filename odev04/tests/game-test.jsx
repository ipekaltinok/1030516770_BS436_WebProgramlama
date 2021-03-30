const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/game');

test("kartlar dagitildi", () => {
    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(2);
})