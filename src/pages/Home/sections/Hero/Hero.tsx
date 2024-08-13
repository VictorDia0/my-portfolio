import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ProfilePic from "../../../../assets/profile-pic.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "70px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImage = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%",
    border: "solid 2px white",
  }));

  return (
    <>
      <StyledHero>
        <Container
          maxWidth="lg"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImage src={ProfilePic} />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              textAlign="center"
            >
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                paddingBottom={2}
              >
                Victor Dias
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                I'm Software Developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={2}
                marginTop="10px"
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => console.log("Down")}>
                    <ArrowDownwardIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => console.log("contact")}>
                    <EmailIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
