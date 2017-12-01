const utils = require('./utils');
const expect = require('expect');
const mockRequest = require('mock-request');
const request = require('request-promise-native');
const rewire = require('rewire');

describe('Utils', () => {

  describe('#add', () => {
    it('Should add two numbers', () => {
      const result = utils.add(33, 11);
    
      expect(result)
      .toBe(44)
      .toBeA('number');
    });
  })
  
  it('Should square a number', () => {
    const res = utils.square(3);
  
    expect(res)
      .toBe(9)
      .toBeA('number');
  });
  
  // it ('Should expect some values', () => {
  
  //   expect(12).toNotBe(12);
  //   expect({name: 'felipe'}).toEqual({name: 'felipe'});
  //   expect({name: 'Felipe'}).toNotEqual({name: 'felipe'});
  //   expect([2,3,4]).toInclude(2);
  //   expect([2,3,4]).toExclude(5);
  //   expect({
  //     name : 'Felipe',
  //     age: 30,
  //     location: 'Campinas'
  //   }).toInclude({
  //     age : 30
  //   });
  //   expect({
  //     name : 'Felipe',
  //     age: 30,
  //     location: 'Campinas'
  //   }).toExclude({
  //     age : 39
  //   });
  
  // });
  
  it('Should verify first and lastName are set with 2 names', () => {
    let user = {};
    user = utils.setName(user, 'Felipe Romani');
  
    expect(user)
      .toInclude({
        firstName: 'Felipe',
        lastName: 'Romani' 
      })
  });
  
  it('Should verify first and lastName are set with 3 names', () => {
    let user = {
      location: 'Campinas',
      age: 30
    };
    const res = utils.setName(user, 'Felipe Augusto Romani');
  
    expect(res)
      .toInclude({
        firstName: 'Felipe',
        lastName: 'Romani' 
      })
  
  });
  
  it('Should verify first and lastName are set with 5 names', () => {
    const user = {
      location: 'Campinas',
      age: 30
    };
    const res = utils.setName(user, 'Felipe Augusto Henrique Rodrigo Romani');
  
    expect(res)
      .toInclude({
        firstName: 'Felipe',
        lastName: 'Romani' 
      })
  });
  
  it('Should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  
  it('Should async square number', (done) => {
    utils.asyncSquare(10, (result) => {
      expect(result).toBe(100).toBeA('number');
      done();
    });
  });
  
  it('Sould get user correcly from get user', (done) => {

    const mockUtils = rewire('../utils/utils.js');
    
    mockUtils.__set__('request', () => {
      return new Promise((resolve, reject) => {
        resolve(JSON.stringify({
          name: 'Elisa',
          age: 29
        }))
      })
    });

    mockUtils.getUser()
      .then((user) => {
        expect(user).toInclude({
          name: 'Elisa'
        });
        done();
      })
      .catch(err => done(err))
  });
});
