import React from 'react';
import Button from './Button';

import globalEnzyme from '../../setupTests';


describe('Button testing',()=>{
    it('btn text passing',()=>{

        const newBtn = globalEnzyme.shallow(<Button btnText='Test'/>);

        console.log(newBtn.debug());

        expect(newBtn.find('button').text()).toEqual('Test');
    })
});
