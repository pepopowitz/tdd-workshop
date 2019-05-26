import trails from './controller';

export default function(app) {
  // trails Routes
  app.route('/trails')
    .get(trails.get);
};