import controller from './controller';

import trailData from '../trail-data';

describe('module-5ab/api/trails/controller', () => {
  function aMockResponse() {
    return {
      json: jest.fn(),
    };
  }

  function getLastCallArgs(mockResponse) {
    if (mockResponse.json.mock.calls.length === 0) {
      return undefined;
    }

    return mockResponse.json.mock.calls[
      mockResponse.json.mock.calls.length - 1
    ][0];
  }

  it('returns all trails with no criteria', () => {
    const mockResponse = aMockResponse();
    const request = {
      query: {},
    };

    controller.get(request, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledTimes(1);

    const lastCall =
      mockResponse.json.mock.calls[mockResponse.json.mock.calls.length - 1];
    expect(lastCall[0].length).toEqual(trailData.length);
  });

  it('filters by sport', () => {
    const mockResponse = aMockResponse();
    const request = {
      query: {
        sport: 'Cycling',
      },
    };

    controller.get(request, mockResponse);

    const lastCallArgs = getLastCallArgs(mockResponse);

    expect(lastCallArgs.length).toEqual(5);
    // This is one way I can verify that it contains a trail that I know should be there.
    expect(lastCallArgs).toContainEqual({
      name: 'Oak Leaf',
      distance: 17.0,
      sport: 'Cycling',
      hills: 'Easy',
    });
  });

  it('filters by hills', () => {
    const mockResponse = aMockResponse();
    const request = {
      query: {
        hills: 'Hard',
      },
    };

    controller.get(request, mockResponse);

    const lastCallArgs = getLastCallArgs(mockResponse);

    expect(lastCallArgs.length).toEqual(6);
    // This is another way I can verify that it contains a trail that I know should be there.
    expect(lastCallArgs.some(x => x.name === 'Alpine Valley')).toBe(true);
  });

  describe('distance filter', () => {
    //TODO  - fill in! (and delete the junk above this)
  })
});
