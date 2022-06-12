import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Link as MUILink, Button, Grid } from '@mui/material';
import { UserContext } from '../contexts/UserContext';
import { addCurrencySymbol, getArrowIconByNum, formatNum, getColorByNum } from '../helpers/coins';
import Loading from "../components/Loading";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);


  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, []);

  if (!user) {
    return (
      <Box sx={{ minHeight: 450 }} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
        <Loading size="7rem" />
      </Box>
    );
  }


  return (
    <Container>
      <Typography variant="h3" component="h1" mb={3}>
        Perfil
      </Typography>
      <Box sx={{ minHeight: "calc(100vh - 64px - 200px)" }}>
        <Grid container spacing={5} mb={3}>
          <Grid item xs="auto">
            <Box borderRadius="100%" bgcolor="primary.main" height="100px" width="100px" display="flex" alignItems="center" justifyContent="center">
              <Typography fontSize="3rem" color="white">
                {user.name[0]}
                {user.last_name[0]}
              </Typography>
            </Box>
          </Grid>
          <Grid item sx={{ flex: 1 }}>
            <Grid container spacing={2} mb={3}>
              <Grid item xs="6">
                <Typography fontSize="1rem" color="white" padding={2} bgcolor="secondary.main"  display="flex" justifyContent="space-between">
                  <Typography component="span" sx={{opacity: .5}}>Nombre:</Typography>
                  {user?.name || ''}
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography fontSize="1rem" color="white" padding={2} bgcolor="secondary.main"  display="flex" justifyContent="space-between">
                  <Typography component="span" sx={{opacity: .5}}>Apellido:</Typography>
                  {user?.last_name || ''}
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography fontSize="1rem" color="white" padding={2} bgcolor="secondary.main"  display="flex" justifyContent="space-between">
                  <Typography component="span" sx={{opacity: .5}}>Email:</Typography>
                  {user?.email || ''}
                </Typography>
              </Grid>
              <Grid item xs="6">
                <Typography fontSize="1rem" color="white" padding={2} bgcolor="secondary.main"  display="flex" justifyContent="space-between">
                  <Typography component="span" sx={{opacity: .5}}>Usuario:</Typography>
                  {user?.username || ''}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Profile;