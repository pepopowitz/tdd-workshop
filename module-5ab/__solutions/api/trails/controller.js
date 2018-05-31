import trailData from '../trail-data';

export default {
  get: function(req, response) {
    let results = trailData;

    if (req.query){
      results = maybeFilterBySport(results, req.query.sport);
      results = maybeFilterByHills(results, req.query.hills);
      // SOLUTION!
      results = maybeFilterByDistance(results, req.query.distance);
    }

    response.json(results);
  },
};

function maybeFilterBySport(results, querySport) {
  //... no changes
}

function maybeFilterByHills(results, queryHills) {
  //... no changes
}

// SOLUTION FROM HERE TO END!
function maybeFilterByDistance(results, queryDistance) {
  if (queryDistance) {
    const { min, max } = getMinMaxDistance(queryDistance);
    return results.filter(x => x.distance <= max && x.distance >= min);
  }
  return results;
}

function getMinMaxDistance(queryDistance) {
  if (queryDistance < 10) {
    return { min: queryDistance - 1, max: queryDistance + 1 };
  }
  if (queryDistance < 20) {
    return { min: queryDistance - 2, max: queryDistance + 2 };
  }
  return { min: queryDistance - 3, max: queryDistance + 3 };
}
