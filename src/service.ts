import http from "http"
const url = '127.0.0.1'
const port = 9651
var server=http.createServer(function(req,res){
  var url=req.url;
  res.writeHead(200,{
      'content-type' : 'text/html;charset="utf-8"'
  });
  res.write('ts-node-index');
  res.end();
}).listen(port); //端口号
console.log(`服务开启成功----http://${url}:${port}`);
