import unicornNames from './controller';

export default function(app) {
  // unicorn-names Routes
  app.route('/unicorn-names')
    .get(unicornNames.get);
};