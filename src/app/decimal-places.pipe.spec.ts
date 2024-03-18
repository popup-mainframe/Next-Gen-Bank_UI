import { DecimalPlacesPipe } from './decimal-places.pipe';

describe('DecimalPlacesPipe', () => {
  it('create an instance', () => {
    const pipe = new DecimalPlacesPipe();
    expect(pipe).toBeTruthy();
  });
});
