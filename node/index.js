const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post('/login', (req, res) => {
	//  res.json(req.body);
	fs.readFile("./software/index.js",(err,data)=>{
		if (err){
			//文件读取失败执行这块代码逻辑
			console.log("文件读取错误");
		}else {
			//文件读取成功则会执行这块代码逻辑
			let content = JSON.parse(data.toString())
			let introItem = req.body.data
			content.forEach(element => {
					if(element.name==introItem.name) {
						res.json({"code":400,"msg":'数据已存在'});
					}else{
						console.log(content,'确定')
				
						res.json({'code':200,'msg':'添加成功'});
					}
			});
	
		}
	})
})


app.listen(3000, () => {
	console.log('http://127.0.0.1:3000');
})