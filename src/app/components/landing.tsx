"use client";
import { WhatsApp } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const carouselItems = [
    { img: "./diseño.png", name: "Diseño Web" },
    { img: "./SEO.png", name: "SEO Optimizado" },
    { img: "./marketing.png", name: "Marketing Digital" }
];




export const Landing: React.FC = () => {



    return (
        <Box
            sx={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url('./portada.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                padding: 4,
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    width: '100%',
                    p: 3,
                    borderRadius: 2,
                }}
            >
                <Grid size={5}
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}>


                    <Grid
                        size={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Box sx={{ width: "60%", maxWidth: 500 }}> {/* Establece un ancho máximo */}
                            <Carousel
                                swipeable={true}  // Permitir swipe en móvil
                                draggable={true}
                                showDots={true}  // Muestra indicadores de posición
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="all .5s"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                {carouselItems.map((item, index) => (
                                    <Grid
                                        key={index}
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: 'column',
                                            textAlign: "center",
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.img}
                                            alt="Diseño Web"
                                            sx={{
                                                width: 250,
                                                height: 250,
                                                borderRadius: "50%",
                                                opacity: 0.9,
                                                mb: 0,
                                            }}
                                        />
                                        <Divider 
                                            sx={{ 
                                                width: "100%", 
                                                bgcolor: "white",
                                                p: 0.1, 
                                                mx: "auto", 
                                                mb: 1}} />
                                        <Typography
                                            variant="h5" // Puedes probar con h4 si quieres aún más grande
                                            sx={{
                                                fontSize: "1.8rem", // Tamaño personalizado (ajusta según necesites)
                                                fontWeight: 900, // Hace el texto más grueso
                                                color: "white",
                                                mb: 3,
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                    </Grid>
                                ))}
                            </Carousel>

                        </Box>
                    </Grid>

                </Grid>

                <Grid size={7}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "25%",
                            height: "15%",
                            borderTop: "4px solid cyan",
                            borderRight: "4px solid cyan",
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: '25%',
                            height: "15%",
                            borderBottom: "4px solid cyan",
                            borderLeft: "4px solid cyan",
                        },
                    }}
                >

                    <Grid
                        sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: 'column'
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{
                                fontWeight: 700
                            }}
                        >
                            Impulsa tu negocio con una página web
                        </Typography>

                        <Typography variant="h6" mt={2} mb={8}>
                            Aumenta tu visibilidad, atrae más clientes y mejora tus ventas con una plataforma profesional adaptada a tus necesidades.
                        </Typography>
                        <IconButton aria-label="delete" sx={{ backgroundColor: 'green', width: 80, height: 80 }}>
                            <WhatsApp sx={{
                                width: 50, height: 50,
                                color: 'white'
                            }} />
                        </IconButton>
                        <Typography variant="h6" mt={2}>
                            Escribenos y conoce mas nuestro servicios
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};
