import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';

function ListaPostagem() {
  const [postagem, setPostagem] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate();

  useEffect(()=> {
    if (token == ''){
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getPostagem() {
    await busca("/postagem", setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect (()=>{
    getPostagem()
  }, [postagem.length])
  return (
  <>
  {
    postagem.map(postagem=>(  
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
            {postagem.tutulo}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/editarPost/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/apagarPost/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
  </>)
}

export default ListaPostagem;