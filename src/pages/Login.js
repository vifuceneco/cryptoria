import React, { useContext, useState } from 'react';
import { Box, Container, Typography, TextField, Avatar, Button } from '@mui/material';
import LockOutlined from "@mui/icons-material/LockOutlined";
import Refresh from '@mui/icons-material/Refresh';
import Check from '@mui/icons-material/Check';

import Loading from '../components/Loading';
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const {login, loading, user, errorMessage} = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!loading) {
      login({email, password});
    }
  }
  
  return (
    <Container>
      <Box my={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px - 270px)', }}>
        <Avatar sx={{ m: 1, bgcolor: loading ? 'gray.main' : (user ? 'primary.main' : 'secondary.main') }}>
          {!loading && !user && <LockOutlined fontSize="3rem" />}
          {loading && <Refresh size="3rem" className="rotating" /> }
          {user && <Check size="3rem" /> }
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            disabled={loading}
            id="email"
            label="Email Address"
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            disabled={loading}
            label="Password"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            disabled={loading || user !== null }
          >
            {loading ? <Loading /> : 'Sign In'}
          </Button>
          { errorMessage && <Typography color="error">{errorMessage}</Typography> }
        </Box>
      </Box>
    </Container>
  );
}

export default Login;