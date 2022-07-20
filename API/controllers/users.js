import userModel from'../models/users.js';
import bcrypt from'bcrypt';	
import jwt from'jsonwebtoken';	
import express from 'express';
const app = express();

export default {
	user: function(req, res, next) {
				  	res.json({status: "Sucesso", message: "você está aqui"});
	},

	cadastrarUser: function(req, res, next) {
		userModel.create({ email: req.body.email, senha: req.body.senha }, function (err, result) {
			if (err) 
				next(err);
			else
				res.json({status: "Sucesso", message: "Usuário adicionado com sucesso"});
			
		  });

	},

	listarUsers:  function(req, res, next) {
		userModel.find((err, userModel) => {      
			if(err){
			  next(err)
			}else{
				res.status(200).json(userModel);
			}
		})
	  },
	  

		verificaToken: function(req, res, next){
			let token = req.body.token;
			const secretKey = req.app.get('secretKey');

			if(!secretKey){
				res.status(401).json({erro: "Secret key vazia"});
			}
			try{
				if(token){
					jwt.verify(token, secretKey)
					? res.json({status: true})
					: res.json({status: false})
				}

			}catch(err){
				res.status(500).json({erro: err});
			}
		},

	authenticate: function(req, res, next) {
		userModel.findOne({email:req.body.email}, function(err, userInfo){
					if (err) {
						// next(err);
					} else {

						if(userInfo != null && bcrypt.compareSync(req.body.senha, userInfo.senha)) {

						 const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' }); 

						 res.status(200).json({menssagem:"Sucesso", message: "Usuário encontrado", data:{user: userInfo, token:token}});	
						}else{
							res.status(500).json({menssagem:"erro", message: "Email ou senha inválido", data:null});
						}
					}
				});
	},

}					
