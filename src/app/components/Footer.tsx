import React from "react";
import { Box, Container, Typography, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';


export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "white",
        py: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sección: Acerca de */}
          <Grid container size={{xs:12, sm:4}}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
            <span style={{fontSize: '20px', fontWeight: 'bold'}}>APEX</span>
            <span style={{fontSize: '20px', color: '#248fef', fontWeight: 'bold'}}>LOGIC</span> <span>Solutions</span> centro tecnologico
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Avanza al siguiente nivel potenciando tu empresa con soluciones tecnologicas, avanza con nuestras soluciones
            </Typography>
          </Grid>

          {/* Sección: Enlaces rápidos */}
          <Grid  size={{xs:12, sm:4}}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Enlaces rápidos
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Inicio
            </Link>
            <Link href="/shop" color="inherit" underline="hover" display="block">
              Paginas web
            </Link>
            <Link href="/about" color="inherit" underline="hover" display="block">
              Apps moviles
            </Link>
            <Link href="/about" color="inherit" underline="hover" display="block">
              Nosotros
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Contactanos
            </Link>
          </Grid>

          {/* Sección: Redes sociales */}
          <Grid size={{xs:12, sm:4}}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://youtube.com" target="_blank" color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Línea divisoria */}
        <Divider sx={{ my: 3, backgroundColor: "gray" }} />

        {/* Derechos de autor */}
        <Typography variant="body2" align="center" sx={{ color: "gray" }}>
          © {new Date().getFullYear()} ApexLogic. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

