class HomeCtl {
    index(ctx) {
        ctx.body = '这是主页';
    }
    upload(ctx){
        const file=ctx.request.files;
        ctx.body={path: file};
    }
}

module.exports=new HomeCtl();