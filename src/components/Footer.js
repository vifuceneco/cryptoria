import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../logo.svg";
import { Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "dark.main" }} py={2} display="flex" justifyContent="center">
      <Container mb={1}>
        <img
          src={logo}
          alt="Cryptoria"
          width={50}
          style={{ marginRight: "1rem", filter: "brightness(5) grayscale(1)" }}
        />
        <Box my={2}>
          <Link sx={{ mr: 1 }}href="https://facebook.com">
            <FacebookIcon />
          </Link>
          <Link sx={{ mr: 1 }}href="https://twitter.com">
            <TwitterIcon />
          </Link>
          <Link sx={{ mr: 1 }}href="https://instagram.com">
            <InstagramIcon />
          </Link>
          <Link href="https://linkedin.com">
            <LinkedInIcon />
          </Link>
        </Box>
        <Typography color="white" sx={{ opacity: .5 }}>Cryptoria &copy; All rights reserved.</Typography>
      </Container>
    </Box>
  );
}

export default Footer;