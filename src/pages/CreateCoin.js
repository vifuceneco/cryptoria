import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";

import { CoinsContext } from "../contexts/CoinsContext";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const CreateCoin = () => {
  const navigate = useNavigate();
  const { errorMessage, createCoin } = useContext(CoinsContext);
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    id: "",
    symbol: "",
    name: "",
    description: "",
    market_cap: 0,
    market_cap_rank: 0,
    price_ars: 0,
    price_usd: 0,
    price_eur: 0,
    subreddit_url: "https://reddit.com/r/",
    twitter_followers: 0,
    reddit_subscribers: 0,
    official_forum_url: "https://",
    homepage: "https://",
  });

  const handleChange = (newValue) => setFormData(prevData => {
    return {
      ...prevData,
      ...newValue,
    };
  })

  const handleSubmit = () => createCoin(formData, user);

  useEffect(() => {
    if (!user) {
      // return navigate("/");
    }
  }, []);
  
  // if (!user) {
  //   return (
  //     <Box sx={{minHeight: 450}} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
  //       <Loading size="7rem"/>
  //     </Box>
  //   );
  // }

  return (
    <Container>
      <Box sx={{ minHeight: "calc(100vh - 64px - 200px)" }}>
        <Typography variant="h3" component="h1" mb={3}>
          Create your coin
        </Typography>
        <Grid spacing={4} container mb={3}>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({id: e.target.value})}
              defaultValue={formData.id}
              fullWidth
              required
              id="id"
              label="ID"
              autoFocus
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({symbol: e.target.value})}
              defaultValue={formData.symbol}
              fullWidth
              required
              label="Symbol"
              id="symbol"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({name: e.target.value})}
              defaultValue={formData.name}
              fullWidth
              required
              label="Name"
              id="name"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({description: e.target.value})}
              defaultValue={formData.description}
              fullWidth
              required
              label="Description"
              id="description"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({market_cap: e.target.value})}
              defaultValue={formData.market_cap}
              fullWidth
              required
              label="Market Cap"
              id="marketCap"
              InputProps={{startAdornment: "$"}}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({market_cap_rank: e.target.value})}
              defaultValue={formData.market_cap_rank}
              fullWidth
              required
              label="Market Cap rank"
              id="marketCapRank"
              InputProps={{startAdornment: "#"}}
            />
          </Grid>
        </Grid>  
        <Typography variant="h5" component="h2" mb={2}>Price</Typography>
        <Grid container spacing={2} mb={3}>
          <Grid item sm={4}>
            <TextField
              onChange={(e) => handleChange({price_ars: e.target.value})}
              defaultValue={formData.price_ars}
              InputProps={{startAdornment: "$"}}
              fullWidth
              required
              label="ARS"
              id="priceARS"
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              onChange={(e) => handleChange({price_usd: e.target.value})}
              defaultValue={formData.price_usd}
              InputProps={{startAdornment: "$"}}
              fullWidth
              required
              label="USD"
              id="priceUSD"
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              onChange={(e) => handleChange({price_eur: e.target.value})}
              defaultValue={formData.price_eur}
              InputProps={{startAdornment: "$"}}
              fullWidth
              required
              label="EUR"
              id="priceEUR"
            />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2" mb={2}>Community Data</Typography>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <TextField
              onChange={(e) => handleChange({subreddit_url: e.target.value})}
              defaultValue={formData.subreddit_url}
              fullWidth
              required
              label="Subreddit"
              id="subreddit"
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              onChange={(e) => handleChange({twitter_followers: e.target.value})}
              defaultValue={formData.twitter_followers}
              fullWidth
              required
              label="Twitter Followers"
              id="twitter"
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              onChange={(e) => handleChange({reddit_subscribers: e.target.value})}
              defaultValue={formData.reddit_subscribers}
              fullWidth
              required
              label="Reddit Subscribers"
              id="subscribers"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({official_forum_url: e.target.value})}
              defaultValue={formData.official_forum_url}
              fullWidth
              required
              label="Official Forum"
              id="forum"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              onChange={(e) => handleChange({homepage: e.target.value})}
              defaultValue={formData.homepage}
              fullWidth
              required
              label="Official website"
              id="officialWebsite"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
            Create
          </Button>
        </Box>
        {errorMessage && <Typography color="error" align="right" sx={{mb: 2}} >{errorMessage}</Typography>}
      </Box>
    </Container>
  );
}

export default CreateCoin;