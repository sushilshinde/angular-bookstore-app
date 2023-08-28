import { shortenPipe } from "./shorten.pipe";

describe('Shorten pipe', () =>
{
  it('create an instance', () =>
  {
    const pipe = new shortenPipe();
    expect(pipe).toBeTruthy();
  });
});
