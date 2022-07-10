import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Logo from "../assets/signature.png";
import Logindp from "../assets/ajdp.png";
import "../css/home.css";
import { Link } from "react-router-dom";

// const pages = ["Home", "About Me", "Skills", "Projects", "Login"];
const settings = ["Account", "Add Project", "Inbox", "Dashboard", "Logout"];

const Header = () => {
  // const isLoggedIn = this.state.isLoggedIn;
  const myStyles = {
    color: "Black",
    textTransform: "capitalize",
    textDecoration: "none",
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img id="brand-logo" src={Logo} alt="LOGO" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={myStyles} component="NavLink" to="/">
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={myStyles} component="NavLink" to="/">
                    About Me
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={myStyles} component="NavLink" to="/">
                    Skills
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={myStyles} component="NavLink" to="/">
                    Projects
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={myStyles} component="NavLink" to="/login">
                    Login
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link style={myStyles} component="NavLink" to="/logout">
                    Logout
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img id="brand-logo" src={Logo} alt="LOGO" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "right",
              },
            }}
          >
            {/* {pages.map((page) => ( */}
            <Link
              style={{ textDecoration: "none" }}
              component="NavLink"
              to="/login"
            >
              <IconButton
                id="menu-links"
                onClick={handleCloseNavMenu}
                sx={{
                  typography: "subtitle1",
                  fontSize: "default",
                  fontWeight: "Medium",
                  my: 2,
                  color: "White",
                  display: "block",
                  mr: "3rem",
                  textTransform: "capitalize",
                }}
              >
                Home
              </IconButton>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              component="NavLink"
              to="/login"
            >
              <IconButton
                id="menu-links"
                onClick={handleCloseNavMenu}
                sx={{
                  typography: "subtitle1",
                  fontSize: "default",
                  fontWeight: "Medium",
                  my: 2,
                  color: "White",
                  display: "block",
                  mr: "3rem",
                  textTransform: "capitalize",
                }}
              >
                About Me
              </IconButton>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              component="NavLink"
              to="/login"
            >
              <IconButton
                id="menu-links"
                onClick={handleCloseNavMenu}
                sx={{
                  typography: "subtitle1",
                  fontSize: "default",
                  fontWeight: "Medium",
                  my: 2,
                  color: "White",
                  display: "block",
                  mr: "3rem",
                  textTransform: "capitalize",
                }}
              >
                Skills
              </IconButton>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              component="NavLink"
              to="/login"
            >
              <IconButton
                id="menu-links"
                onClick={handleCloseNavMenu}
                sx={{
                  typography: "subtitle1",
                  fontSize: "default",
                  fontWeight: "Medium",
                  my: 2,
                  color: "White",
                  display: "block",
                  mr: "3rem",
                  textTransform: "capitalize",
                }}
              >
                Projects
              </IconButton>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              component="NavLink"
              to="/login"
            >
              <IconButton
                id="menu-links"
                onClick={handleCloseNavMenu}
                sx={{
                  typography: "subtitle1",
                  fontSize: "default",
                  fontWeight: "Medium",
                  my: 2,
                  color: "White",
                  display: "block",
                  mr: "3rem",
                  textTransform: "capitalize",
                }}
              >
                Login
              </IconButton>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              component="NavLink"
              to="/logout"
            >
              <IconButton
                id="menu-links"
                onClick={handleCloseNavMenu}
                sx={{
                  typography: "subtitle1",
                  fontSize: "default",
                  fontWeight: "Medium",
                  my: 2,
                  color: "White",
                  display: "block",
                  mr: "3rem",
                  textTransform: "capitalize",
                }}
              >
                Logout
              </IconButton>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={Logindp} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
