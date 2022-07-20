import userModel from'../models/users.js';
import bcrypt from'bcrypt';	
import jwt from'jsonwebtoken';				

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


	// 	let user = new userModel(req.body);
	// 	user.save(function (err, result) {
	// 			  if (err) 
	// 			  	next(err);
	// 			  else
	// 			  	res.json({status: "Sucesso", message: "Usuário adicionado com sucesso", data: null});
				  
	// 			});
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

	authenticate: function(req, res, next) {
		userModel.findOne({email:req.body.email}, function(err, userInfo){
					if (err) {
						next(err);
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
