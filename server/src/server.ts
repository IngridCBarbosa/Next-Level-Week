import express, { response } from 'express';
import cors from 'cors';
import path from 'path' // quando lidamos com caminhos
import routes from './routes'


// ROTA: ENDEREÇO COMPLETO DA REQUISIÇÃO
// RECURSOS: QUAL ENTIDADE ESTAMOS ACESSANDO DO SISTEMA

// GET: BUSCAR UMA OU MAIS INFORMAÇÕES DO BACK-END
// POST: cRIAR UMA NOVA INFORMAÇÃO NO BACK-END
// PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE NO BACK-END
// DELETE: REMOVER UMA INFORMAÇÃO DO BACK=END

// POST: http://localhost:3333/users = criar um usuário
// GET:  http://localhost:3333/users = Listar  usuários 
// GET: http://localhost:3333/users/5 = Buscar dados do uuário com ID 5

// TIPOS DE PARAMETROS
// REQUEST PARAM: PARÂMETROS QUE VEM NA PRÓPRIA ROTA QUE IDENTIFICAM UM RECURSO 
// QUERY PARAM: SÃO PARÂMETROS QUE VEM NA PRÓPRIA ROTA GERALMENTO OPICIONAIS  PARA FILTROS E PAGINAÇÃO.
// RQUEST BODY: PARÂMETROS PARA CRIAÇÃO/ATUALIZAÇÃO  DE INFORMAÇÃO

// SELECT * FROM USERS WHERE NAME = 'DIEGO'
// KNEX('USERS').WHERE('NAME','DIEGO').SELECT('*'). o KNEX É UM QUERY BUILDER!!


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))

app.listen(3333);
