// eslint-disable-next-line import/no-unresolved
import { communtCounter } from './module/commentspopup.js';

const commentarr = ['comment1', 'comment2'];
describe('Comment counter', () => {
  test('Comments(2)', () => {
    communtCounter(commentarr);
    expect(commentarr.lenght).toEqual(2);
  });
});