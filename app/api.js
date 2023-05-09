
const routes = require('./routes')

const restify = require('restify');
const app = restify.createServer();

const corsMiddle = (req, res, next) => {
  if(req.method == 'OPTIONS'){
    res.header("Access-Control-Allow-Methods", '*')
    res.header("Access-Control-Request-Method", '*')
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", '*')
   // res.header("Access-Control-Allow-Credentials", 'true')*/
    res.header('Access-Control-Max-Age','86400')
    res.send(200);
    return
  }
  next()
}
app.pre(corsMiddle)



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", '*')
    res.header("Access-Control-Request-Method", '*')
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", '*')
    res.header('Access-Control-Max-Age','86400')
    next()
});

app.use(restify.plugins.bodyParser());
app.use(restify.plugins.queryParser());

routes.attach(app)

module.exports = app