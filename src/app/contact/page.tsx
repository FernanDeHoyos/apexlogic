"use client";

import { useState } from "react";
import { Box, Typography, TextField, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";
import Grid  from "@mui/material/Grid2";


export default function ContactSection() {
    const theme = useTheme();

    // Estado del formulario
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Manejar envío del formulario
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validación de campos
        const newErrors = {
            name: formData.name.trim() === "",
            email: formData.email.trim() === "",
            message: formData.message.trim() === "",
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            console.log("Formulario enviado:", formData);
            alert("Mensaje enviado con éxito.");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <Box sx={{ py: 12, px: 4, textAlign: "center", backgroundSize: "300px 300px" }}>
            {/* Título */}
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Contáctanos
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Estamos aquí para ayudarte. Contáctanos a través del formulario o por WhatsApp.
            </Typography>

            {/* Información de Contacto */}
            <Grid container spacing={4} justifyContent="center">
                <Grid  size={{xs:12, sm:6, md:4}}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="+57 313 660 1690" secondary="Lunes - Viernes: 9AM - 6PM" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="contacto@tuempresa.com" secondary="Correo de atención" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary="Medellín, Colombia" secondary="Nuestra oficina principal" />
                        </ListItem>
                    </List>
                </Grid>

                {/* Formulario de Contacto */}
                <Grid size={{xs:12, sm:6, md:4}}>
                    <Box
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            boxShadow: 3,
                            backgroundColor: "white",
                            textAlign: "left",
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                error={errors.name}
                                helperText={errors.name ? "Este campo es obligatorio" : ""}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Correo Electrónico"
                                name="email"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                                helperText={errors.email ? "Este campo es obligatorio" : ""}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Mensaje"
                                name="message"
                                multiline
                                rows={4}
                                variant="outlined"
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                                helperText={errors.message ? "Este campo es obligatorio" : ""}
                                sx={{ mb: 2 }}
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Enviar Mensaje
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>

            {/* Botón de WhatsApp */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    También puedes contactarnos por WhatsApp
                </Typography>
                <Button
                    variant="contained"
                    color="success"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    href="https://wa.me/573136601690?text=Hola, quiero más información"
                    target="_blank"
                    sx={{ fontWeight: "bold" }}
                >
                    Escribir por WhatsApp
                </Button>
            </Box>

            {/* Mapa (Opcional, puedes cambiar la ubicación) */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Ubicación
                </Typography>
                <iframe
                    title="Mapa"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ borderRadius: "8px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125723.48639673585!2d-75.63209945793558!3d6.244203828765755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46826d5b1617db%3A0x2b31a6e5a36fc46f!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1699999999999"
                    allowFullScreen
                ></iframe>
            </Box>
        </Box>
    );
}
