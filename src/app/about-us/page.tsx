"use client";

import { Box, Typography, Avatar, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const teamMembers = [
    { name: "Fernan David de Hoyos", role: "CEO & Founder", img: "/images/team1.jpg" },
    { name: "María Rodríguez", role: "Desarrolladora Full Stack", img: "/images/team2.jpg" },
    { name: "Carlos Pérez", role: "UI/UX Designer", img: "/images/team3.jpg" },
];

const values = [
    "Innovación tecnológica",
    "Compromiso con el cliente",
    "Excelencia en cada proyecto",
    "Trabajo en equipo",
    "Ética profesional",
];

export default function AboutUsSection() {
    const theme = useTheme();

    return (
        <Box sx={{ py: 12, px: 4, textAlign: "center", backgroundSize: "300px 300px" }}>
            {/* Título */}
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Sobre Nosotros
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Somos una empresa dedicada al desarrollo de software a medida, ofreciendo soluciones web y móviles para impulsar tu negocio en la era digital.
            </Typography>

            {/* Misión y Visión */}
            <Grid container spacing={4} justifyContent="center">
                <Grid  size={{xs:12, sm:6}}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" mb={1}>
                                Nuestra Misión
                            </Typography>
                            <Typography variant="body1">
                                Desarrollar soluciones digitales innovadoras y eficientes, ayudando a empresas y emprendedores a potenciar su presencia en el mundo tecnológico.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  size={{xs:12, sm:6}}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" mb={1}>
                                Nuestra Visión
                            </Typography>
                            <Typography variant="body1">
                                Ser un referente en la industria del desarrollo de software, brindando soluciones de alta calidad y adaptadas a las necesidades del mercado global.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Valores de la empresa */}
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Nuestros Valores
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {values.map((value, index) => (
                        <Grid  size={{xs:12, sm:6, md:4}} key={index}>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary={value} />
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Equipo */}
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Nuestro Equipo
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member, index) => (
                        <Grid size={{xs:12, sm:6, md:4}}  key={index}>
                            <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: "center", p: 2 }}>
                                <Avatar src={member.img} alt={member.name} sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
                                <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Tecnologías */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Nuestras Tecnologías
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={4}>
                    Trabajamos con las tecnologías más avanzadas del mercado para garantizar la mejor calidad en nuestros productos.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {["React", "Next.js", "Node.js", "Spring Boot", "Flutter", "AWS"].map((tech, index) => (
                        <Grid size={{xs:12, sm:6, md:4}}  key={index}>
                            <Card sx={{ boxShadow: 2, borderRadius: 1, p: 2, textAlign: "center" }}>
                                <Typography variant="body1" fontWeight="bold">{tech}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Llamado a la acción */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    ¿Quieres trabajar con nosotros?
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={4}>
                    Contáctanos y hablemos sobre tu proyecto.
                </Typography>
                <Button variant="contained" color="primary" size="large" href="https://wa.me/573136601690" target="_blank">
                    Contáctanos por WhatsApp
                </Button>
            </Box>
        </Box>
    );
}
