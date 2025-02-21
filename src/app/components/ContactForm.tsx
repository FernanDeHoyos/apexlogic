"use client";

import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Nueva versión de Grid2
import { filledInputStyles } from "../themes/styles";
import { useTheme } from "@mui/material/styles";


export const ContactForm: React.FC = () => {

    const theme = useTheme()

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ name: false, email: false, message: false });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto
    
        // Validación de campos vacíos
        const newErrors = {
            name: formData.name.trim() === "",
            email: formData.email.trim() === "",
            message: formData.message.trim() === "",
        };
    
        setErrors(newErrors);
    
        // Si no hay errores, enviar formulario
        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            console.log("Formulario enviado:", formData);
            alert("Mensaje enviado con éxito.");
            setFormData({ name: "", email: "", message: "" }); // Reiniciar formulario
        }
    };
    

    return (
        <Grid container sx={{ 
            backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundColor: theme.palette.background.paper,
            backgroundSize: "300px 300px",}}>
            <Grid
            size={{xs: 12, md: 6, sm:6}}
            sx={{
                mx: "auto",
                my: 4,
                p: 3,
                borderRadius: 3,
                textAlign: "center",
                border: "1px solid #ddd", // Borde del formulario
            }}
        >
            fernan
        </Grid>
            <Grid
            size={{xs: 12, md: 6, sm:6}}
            sx={{
                maxWidth: 600,
                mx: "auto",
                my: 4,
                p: 3,
                borderRadius: 1,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra suave
                backgroundColor: "#f9f9f9", // Fondo claro
                textAlign: "center",
                border: "1px solid #ddd", // Borde del formulario
            }}
        >
            <Typography variant="h5" fontWeight="bold" mb={2}>
                Contáctanos
            </Typography>

                <Grid container spacing={2}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="name"
                            variant="filled"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            helperText={errors.name ? "Este campo es obligatorio" : ""}
                            sx={filledInputStyles}
                        />
                    </Grid>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Correo Electrónico"
                            name="email"
                            type="email"
                            variant="filled"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            helperText={errors.email ? "Este campo es obligatorio" : ""}
                            sx={filledInputStyles}
                        />
                    </Grid>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Mensaje"
                            name="message"
                            multiline
                            rows={4}
                            variant="filled"
                            value={formData.message}
                            onChange={handleChange}
                            error={errors.message}
                            helperText={errors.message ? "Este campo es obligatorio" : ""}
                            sx={filledInputStyles}
                        />
                    </Grid>
                    <Grid size={{xs:12}}>
                        <Button
                            type="submit"
                            onClick={handleSubmit}
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#1976d2",
                                color: "white",
                                fontWeight: "bold",
                                padding: "10px 0",
                                borderRadius: 2,
                                "&:hover": {
                                    backgroundColor: "#1565c0", // Color más oscuro al pasar el mouse
                                },
                            }}
                        >
                            Enviar Mensaje
                        </Button>
                    </Grid>
                </Grid>
        </Grid>
        
        </Grid>
    );
};
