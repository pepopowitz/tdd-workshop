import controller from './controller';

import trailData from '../trail-data';

describe('module-5ab/api/trails/controller', () => {
  function aMockResponse() {
    //... no changes
  }

  function getLastCallArgs(mockResponse) {
    //... no changes
  }

  it('returns all trails with no criteria', () => {
    //... no changes
  });

  it('filters by sport', () => {
    //... no changes
  });

  it('filters by hills', () => {
    //... no changes
  });

  // SOLUTION!
  describe('filters by distance', () => {
    it('returns trails within a mile when distance is less than 10', () => {
      const mockResponse = aMockResponse();

      const request = {
        query: {
          distance: 3,
        },
      };

      controller.get(request, mockResponse);

      const lastCallArgs = getLastCallArgs(mockResponse);

      expect(lastCallArgs.length).toEqual(7);
      expect(lastCallArgs.some(x => x.name === 'Scuppernong 5k')).toBe(true);
    });

    it('returns trails within 2 miles when distance is between 10 and 20', () => {
      const mockResponse = aMockResponse();

      const request = {
        query: {
          distance: 16,
        },
      };

      controller.get(request, mockResponse);

      const lastCallArgs = getLastCallArgs(mockResponse);

      expect(lastCallArgs.length).toEqual(2);
      expect(lastCallArgs.some(x => x.name === 'New Berlin Trail')).toBe(true);
    });

    it('returns trails within 3 miles when distance is more than 20', () => {
      const mockResponse = aMockResponse();

      const request = {
        query: {
          distance: 23,
        },
      };

      controller.get(request, mockResponse);

      const lastCallArgs = getLastCallArgs(mockResponse);

      expect(lastCallArgs.length).toEqual(3);
      expect(lastCallArgs.some(x => x.name === 'Devils Lake')).toBe(true);
    });
  });
});
