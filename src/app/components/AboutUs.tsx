"use client";

import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Cards } from "./elements/Cards";
import { useTheme } from "@mui/material/styles";


const items = [
    {
        image: "./web.jpg",
        title: "Desarrollo Web",
        text: "Creamos sitios web a medida, optimizados para velocidad, SEO y experiencia de usuario, ayudando a impulsar tu negocio en el mundo digital."
    },

    {
        image: "./app.jpg",
        title: "Desarrollo Móvil",
        text: "Diseñamos y desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android, brindando soluciones innovadoras y funcionales."
    },
];


export const AboutUs: React.FC = () => {

    const theme = useTheme()

    return (
        <Box
            sx={{
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "300px 300px",  // Tamaño de cada celda de la cuadrícula
                backgroundColor: theme.palette.background.paper,   // Color de fondo
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: 3, md: 3 },
            }}
        >
            <Grid container spacing={2} maxWidth="lg">
                {/* Columna 1: Quiénes somos */}
                <Grid size={12} 
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Typography variant="h6" sx={{textAlign: 'center'}}>
                        <span style={{fontSize: '25px', fontWeight: 'bold'}}>APEX</span>
                        <span style={{fontSize: '25px', color: '#248fef', fontWeight: 'bold'}}>LOGIC</span> <span>Solutions</span> centro tecnologico
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: 4,
                            borderRadius: 2,
                            boxShadow: 3,
                            borderLeft: "6px solid #1976d2",
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={"./logo_base.png"}
                            alt="Logo"
                            sx={{
                                height: 223,
                                width: "auto",
                                cursor: "pointer",
                                padding: 0,
                            }}
                        />
                        <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
                            ¿Quiénes somos?
                        </Typography>
                        <Typography variant="body1" color="gray">
                            Somos un equipo apasionado por el desarrollo de soluciones digitales innovadoras.
                            Nuestra misión es ayudar a empresas a crecer a través de tecnología de vanguardia.
                        </Typography>


                    </Box>
                </Grid>

                {/* Columna 2: Lo que hacemos */}
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: 'column', sm: 'row' }
                        }}
                    >
                        <Cards items={items} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
