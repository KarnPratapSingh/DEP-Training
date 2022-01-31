import { FullnamePipe } from './fullname.pipe';

describe('FullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });

  it('give fullname', () => {
    const pipe = new FullnamePipe();
    const fullName = pipe.transform('Karn', 'Pratap');
    expect(fullName).toEqual('Karn Pratap');
  });
});
