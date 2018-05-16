export default {
  get: function(req, res) {
    console.log('getting unicorn name for...', req.query);
    res.json({action: 'get'})    
  },
}