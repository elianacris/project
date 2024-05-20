import { Box, Typography } from "@mui/material";
import InputRHF from "../../components/RHF/InputRHF";
import { useForm } from "react-hook-form";

export const Home = () => {
  const { control } = useForm();
  return (
    <Box>
      <Typography>Formulário</Typography>
      <Box>
        <InputRHF control={control} name="nome" />
      </Box>
    </Box>
  );
};
