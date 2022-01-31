import { UserActiveButtonPipe } from './user-active-button.pipe';

describe('UserActiveButtonPipe', () => {
  it('create an instance', () => {
    const pipe = new UserActiveButtonPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new UserActiveButtonPipe();
    const buttonFeature=pipe.transform(false);
    expect(buttonFeature).toEqual('Deactivate');
  });
});
