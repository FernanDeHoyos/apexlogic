"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

// Iconos de Material UI
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useContext, useState } from "react";
import { ThemeContext } from "../themes/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

interface NavbarProps {
  navigation: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  // Estado para el Drawer (menú en dispositivos móviles)
  const { mode, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Estado para el menú del perfil
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };



  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };


  // Contenido del Drawer (menú móvil)
  const drawer = (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
        }}
      >
        <Box
          component="img"
          src={"./logo_base.png"}
          alt="Logo"
          sx={{
            height: 30,
            width: "auto",
            cursor: "pointer",
            padding: 0,
          }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navigation.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              selected={item.current}
              sx={{
                textAlign: "center",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar principal */}
      <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper }}>
        <Toolbar>
          {/* Botón del menú en móviles */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo y enlaces de navegación */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>

            <Box
              component="img"
              src={"./logo_v1.png"}
              alt="Logo"
              sx={{ height: 40, width: "auto", cursor: "pointer", padding: 0 }}
            />

            {/* Enlaces visibles en pantallas grandes */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  disableRipple // Elimina el efecto de onda
                  disableElevation // Quita la sombra en hover
                  sx={{
                    my: 2,
                    color: theme.palette.primary.main,
                    backgroundColor: "transparent", // Sin fondo
                    "&:hover": {
                      backgroundColor: "transparent", // Evita cambios de color en hover
                    },
                    textTransform: "none",
                    boxShadow: "none", // Asegura que no haya sombras
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Iconos a la derecha: Notificaciones y Perfil */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'light' ? <DarkMode sx={{ color: 'black' }} /> : <LightMode />}
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <NotificationsIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
            {/* <IconButton color="inherit" onClick={handleProfileMenuOpen}>
              <Avatar
                alt="User"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </IconButton> */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleProfileMenuClose}>Your Profile</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleProfileMenuClose}>Sign out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para menú móvil */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejor rendimiento en dispositivos móviles
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
