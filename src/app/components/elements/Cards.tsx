"use client";

import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Typography } from "@mui/material";
import Grid  from "@mui/material/Grid2";

interface CardItems {
    image: string;
    title: string;
    text?: string; // Ahora acepta un texto opcional
}

interface CardProps {
    items: CardItems[];
}

export const Cards: React.FC<CardProps> = ({ items }) => {
    return (
        <Grid container spacing={2}
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'
        }}>
            {items.map((item, index) => (
                <Grid  size={{xs:12, sm:12, md: 6 }} key={index}
                >
                    <Card >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.image} // Usa la imagen del array
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                {item.text && ( // Solo muestra el texto si está definido
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.text}
                                    </Typography>
                                )}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};
