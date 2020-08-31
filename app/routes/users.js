const Router =require('koa-router');
const { prefix } = require('./home');
const router =new Router({prefix: '/users'});
const db=[{name:"李雷"}];

router.get('/', (ctx)=>{
    ctx.body=db;
});

router.post('/', (ctx)=>{
    db.push(ctx.request.body);
    ctx.body=ctx.request.body;
});

router.get('/:id', (ctx)=>{
    ctx.body=db;[ctx.params.id*1];
});

router.delete('/:id', (ctx)=>{
    cdb.splice(ctx.params.id*1,1);
    ctx.status=204;
});

module.exports=router;