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
      middleName: 'Burtleby',
      lastName: 'Turtle',
      birthMonth: 'April',
      birthDate: 8,
    });

    expect(result).toEqual('Sunny Sugar Darkness, Whisperer of JSX');
  });

  it('generates Alex Puccio a name', () => {
    const result = generateName({
      firstName: 'Alex',
      middleName: 'Something',
      lastName: 'Puccio',
      birthMonth: 'March',
      birthDate: 21,
    });

    expect(result).toEqual('Emerald Cuddly Comet, Breath of Type-safety');
  });

  it('handles no middle name', () => {
    const result = generateName({
      firstName: 'Bartleby',
      lastName: 'Turtle',
      birthMonth: 'April',
      birthDate: 8,
    });

    expect(result).toEqual('Sunny Darkness, Whisperer of JSX');
  });
});
