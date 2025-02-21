"use client";

import { Box, Typography, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";

const pricingPlans = [
    {
        title: "Básico",
        price: "$300 USD",
        features: [
            "Sitio web de hasta 3 páginas",
            "Diseño responsivo",
            "SEO básico",
            "Soporte por 1 mes",
        ],
    },
    {
        title: "Profesional",
        price: "$600 USD",
        features: [
            "Sitio web de hasta 7 páginas",
            "Diseño avanzado y responsivo",
            "SEO optimizado",
            "Integración con redes sociales",
            "Soporte por 3 meses",
        ],
    },
    {
        title: "Empresarial",
        price: "Desde $1,200 USD",
        features: [
            "Sitio web personalizado",
            "E-commerce / Tienda en línea",
            "SEO avanzado + Google Analytics",
            "Integraciones avanzadas (APIs, pagos)",
            "Soporte por 6 meses",
        ],
    },
];

const paymentMethods = [
    { name: "Tarjeta de Crédito/Débito", icon: <CreditCardIcon /> },
    { name: "PayPal", icon: <PaymentsIcon /> },
    { name: "Transferencia Bancaria", icon: <PaymentsIcon /> },
];

export default function WebDevelopmentSection() {
    const theme = useTheme();
    const whatsappNumber = "573136601690"; // 🔹 Número de WhatsApp (sin '+')

    // 🔹 Función para abrir WhatsApp con la info del plan seleccionado
    const handleWhatsApp = (plan: { title: string; price: string; features: string[] }) => {
        const message = `Hola, estoy interesado en el plan *${plan.title}* (${plan.price}).%0A%0ACaracterísticas:%0A- ${plan.features.join("%0A- ")}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank"); // 🔹 Abre WhatsApp en una nueva pestaña
    };

    return (
        <Box sx={{ py: 12, px: 4, textAlign: "center", backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundColor: theme.palette.background.paper,
            backgroundSize: "300px 300px", }}>
            {/* Título */}
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Desarrollo Web Profesional
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
                Creamos sitios web modernos, optimizados y adaptados a tus necesidades.
            </Typography>

            {/* Planes de Precios */}
            <Grid container spacing={3} justifyContent="center">
                {pricingPlans.map((plan, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card sx={{ boxShadow: 3, borderRadius: 2, height: 500 }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" mb={1}>
                                    {plan.title}
                                </Typography>
                                <Typography variant="h5" color="primary" fontWeight="bold">
                                    {plan.price}
                                </Typography>
                                <List sx={{ mt: 2 }}>
                                    {plan.features.map((feature, i) => (
                                        <ListItem key={i}>
                                            <ListItemIcon>
                                                <CheckCircleIcon color="success" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    onClick={() => handleWhatsApp(plan)} // 🔹 Llama a la función con el plan seleccionado
                                >
                                    Cotizar Ahora
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Métodos de Pago */}
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Métodos de Pago
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {paymentMethods.map((method, index) => (
                        <Grid key={index}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                {method.icon}
                                <Typography variant="body1">{method.name}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Beneficios */}
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    ¿Por qué elegirnos?
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {[
                        "Diseño adaptado a tu marca",
                        "Optimización para Google y SEO",
                        "Carga rápida y responsive",
                        "Soporte post-lanzamiento",
                    ].map((benefit, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Typography variant="body1" fontWeight="bold">
                                ✅ {benefit}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
