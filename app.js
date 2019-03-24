const bodyParser = require('koa-bodyparser');
const koa = require('koa');
const app = new koa();

const response = require('./middlewares/response');

// routes
const oauth_router = require('./routes/oauth');
const resource_router = require('./routes/resource');

app.use(response);
app.use(bodyParser());
app.use(oauth_router.routes());
app.use(resource_router.routes());

app.listen(5757);
