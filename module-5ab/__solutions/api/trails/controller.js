import trailData from '../trail-data';

export default {
  get: function(req, response) {
    let results = trailData;

    if (req.query){
      results = maybeFilterBySport(results, req.query.sport);
      results = maybeFilterByHills(results, req.query.hills);
    }

    response.json(results);
  },
};

function maybeFilterBySport(results, querySport) {
  if (querySport) {
    return results.filter(x => x.sport === querySport);
  }
  return results;
}

function maybeFilterByHills(results, queryHills) {
  if (queryHills) {
    return results.filter(x => x.hills === queryHills);
  }
  return results;
}