import React, { useEffect, useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControlLabel, RadioGroup, Radio} from '@mui/material';



const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0' };

    // Submitted fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('Student');

    // TODO: add authprovider login and logout here
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paperStyle} >
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>

                    <form onSubmit={login}> 
                    <Grid 
                        container 
                        direction='column'
                        justify='center'
                        alignItems='stretch'
                        spacing={2}
                    >

                        <Grid item>
                            <TextField 
                                name='username'
                                value={username} 
                                label='Username' 
                                placeholder='Enter username' 
                                variant='outlined' 
                                onChange={(e) => setUsername(e.target.value)} 
                                fullWidth 
                                required 
                            />
                            </Grid>

                            <Grid item>
                                <TextField 
                                    name='password'
                                    value={password} 
                                    label='Password' 
                                    placeholder='Enter password' 
                                    type='password' 
                                    variant='outlined'
                                    onChange={(e) => setPassword(e.target.value)} 
                                    fullWidth 
                                    required 
                                />
                            </Grid>

                            <Grid item>
                                <RadioGroup
                                    name='userGroup'
                                    value={userRole}
                                    onChange={(e)=>{ setUserRole(e.currentTarget.value)}}>    
                                    <FormControlLabel value='Student' control={<Radio />} label='Student' />
                                    <FormControlLabel value='Lecturer' control={<Radio />} label='Lecturer' />
                                    <FormControlLabel value='Admin' control={<Radio />} label='Admin' />
                                </RadioGroup>
                            </Grid>

                            <Grid item>
                                <Button 
                                    type='submit' 
                                    color='primary' 
                                    variant='contained' 
                                    style={btnStyle} 
                                    fullWidth 
                                >
                                    Sign in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login;
