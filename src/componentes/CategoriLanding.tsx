import React from "react";
import { Box, Card, Typography, Button, Grid } from "@mui/material";
import Construcción from "../../public/images/construcción.png";
import Tecnología from "../../public/images/tecnología.png";
import Indumentaria from "../../public/images/indumentaria.png";
import Bienestar from "../../public/images/bienestar.png";
import Gastronomía from "../../public/images/gastronomía.png";
import Cultivos from "../../public/images/cultivos.png";
import Transporte from "../../public/images/transporte.png";
import Reciclaje from "../../public/images/reciclaje.png";

const Categories: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#FDFDFE" }}>
      <Box
        sx={{
          fontFamily: "Nunito, sans-serif",
          color: "#090909",
          textAlign: "center",
          margin: "0 auto",
          padding: "16px",
          maxWidth: "700px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            mt: -4,
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "25px",
            textAlign: "center",
            marginBottom: "2px",
          }}
        >
          Red de Proveedores ECO
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Nunito",
            fontSize: "22px",
            lineHeight: "30px",
            textAlign: "center",
          }}
        >
          Categorías
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardCategory
              icon={Construcción}
              title="Economía social/Desarrollo local/ Inclusión financiera"
            />
            <CardCategory
              icon={Tecnología}
              title="Agroecología/Orgánicos/ Alimentación Saludable"
            />
            <CardCategory
              icon={Indumentaria}
              title="Conservación/Regeneración/ Servicios ecosistémicos"
            />
            <CardCategory
              icon={Bienestar}
              title="Empresas/Organismos de impacto/ Economía circular"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CardCategory icon={Gastronomía} title="Gastronomía" />
            <CardCategory icon={Cultivos} title="Cultivos" />
            <CardCategory icon={Transporte} title="Transporte" />
            <CardCategory icon={Reciclaje} title="Reciclaje" />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#093C59",
            color: "#FFFFFF",
            marginTop: "16px",
            borderRadius: "100px",
            width: "184px",
            height: "40px",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            Ver más Categorías
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

interface CardCategoryProps {
  icon: string;
  title: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({ icon, title }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#EAEAEA",
        margin: "16px 0",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        borderRadius: "16px",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20%",
        }}
      >
        <Box
          sx={{
            border: "1px solid #226516",
            borderRadius: "50%",
            width: { xs: "40px", sm: "48px", md: "56px" },
            height: { xs: "40px", sm: "48px", md: "56px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={icon} alt="icon" style={{ width: "90%", height: "auto" }} />
        </Box>
      </Box>
      <Box sx={{ width: "80%", paddingLeft: "8px" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "25px",
            color: "#093C59",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            height: "1px",
            backgroundColor: "#226516",
          }}
        />
      </Box>
    </Card>
  );
};

export default Categories;
