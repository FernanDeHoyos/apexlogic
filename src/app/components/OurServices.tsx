"use client";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";


const items = [
    {
        icon: "./sitio-web.gif",
        title: "Desarrollo Web",
        text: "Creamos sitios web a medida, optimizados para velocidad, SEO y experiencia de usuario, ayudando a impulsar tu negocio en el mundo digital."
    },
    {
        icon: "./aplicaciones-moviles.gif",
        title: "Desarrollo Móvil",
        text: "Diseñamos y desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android, brindando soluciones innovadoras y funcionales."
    },
    {
        icon: "./ver.gif",
        title: "SEO",
        text: "Optimizamos tu sitio web para motores de búsqueda, mejorando la visibilidad y el posicionamiento en Google para atraer más clientes."
    },
    {
        icon: "./apoyo.gif",
        title: "Soporte Técnico",
        text: "Brindamos asistencia y mantenimiento técnico para garantizar el correcto funcionamiento de tus sistemas y plataformas digitales."
    },
];


export const OurServices: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "300px 300px",
                backgroundColor: theme.palette.background.paper,
                display: "flex",
                justifyContent: "center",
                padding: { xs: 2, md: 4 },
            }}
        >
            <Grid container spacing={2} maxWidth="lg">
                {/* Título */}
                <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
                        Nuestros Servicios
                    </Typography>
                </Grid>

                {/* Servicios en una cuadrícula de 2x2 */}
                {items.map((item, index) => (
                    <Grid sx={{
                        padding: 2,
                        height: 300,
                        borderRadius: "8px",
                        boxShadow: 2,
                        border: "0.1px solid #1976d2",
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        textAlign: "center",
                        '&:hover':{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                            }
                    }} size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "left",
                                padding: 2,
                                textAlign: "center",
                            }}>
                            <Box
                                component="img"
                                src={item.icon}
                                alt={item.title}
                                sx={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    opacity: 0.9,
                                    mb: 2,
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                textAlign: "left", 
                            }}
                        >

                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
                                {item.text}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
