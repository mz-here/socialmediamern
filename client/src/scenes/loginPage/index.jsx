import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  // const imageurl =
  //   "https://images.unsplash.com/photo-1693032521214-fb25014ac9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80";
   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        height: "1000px",
        //backgroundImage: `url(${imageurl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        width="100%"
        backgroundColor="grey"
        p="1rem 6%"
        textAlign="left"
        gap="0.5rem"
        sx={{
          opacity: "1",
          display:"flex"
        }}
      >
        <img
          src="../assets/logo.jpg"
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
        />
        <Typography fontWeight="bold" fontSize="32px" color="#a0db8e">
          Clickz
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        sx={{
          opacity: "1",
        }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Lets have a blast!!!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
