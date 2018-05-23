import generateName from './index';

describe('module-1/name-generator/index', () => {
  it('generates me a name', () => {
    const result = generateName({
      firstName: 'Steven',
      middleName: 'J',
      lastName: 'Hicks',
      birthMonth: 'January',
      birthDate: 26,
    });

    expect(result).toEqual('Sassy Crystal Briar, Tamer of IIFEs');
  });

  it('generates my cat a name', () => {
    const result = generateName({
      firstName: 'Bartleby',
      middleName: 'Drtleby',
      lastName: 'Turtle',
      birthMonth: 'April',
      birthDate: 8,
    });

    expect(result).toEqual('Sunny Sugar Darkness, Whisperer of JSX');
  });
});
