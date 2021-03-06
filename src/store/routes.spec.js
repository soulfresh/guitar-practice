import { getRoute } from './routes';

describe('routes', function() {
  describe('getRoute', function() {
    it('should be able to get a route without parameters.', () => {
      expect(getRoute('HOME')).toEqual('/');
    });

    xit('should be able to get a route with parameters.', () => {
      expect(getRoute('FOO', {fooId: 123}))
        .toEqual('/foo/123');
    });
  });
});
