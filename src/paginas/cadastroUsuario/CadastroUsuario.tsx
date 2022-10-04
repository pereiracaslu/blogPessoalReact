import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import './CadastroUsuario.css';
import { countReset } from 'console';
function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center'>
            <Grid item xs={6} className="imagem 2"></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}  marginY={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar Usuário</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                             </Link>
                                <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                             
                        </Box>
                    </form>

                </Box>

            </Grid>

        </Grid>



    );


}

export default CadastroUsuario