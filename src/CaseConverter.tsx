import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { CopyButton } from "./common/CopyButton";
import React from "react";
import { CASE_TYPES } from "./CASE_TYPES";
import { SelectComponent } from "./SelectComponent";
import { TextConverter } from "./TextConverter";

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [inputCaseType, setInputCaseType] = useState(CASE_TYPES[0].value);
  const [outputCaseType, setOutputCaseType] = useState(CASE_TYPES[1].value);

  const textConverter = new TextConverter(inputCaseType, outputCaseType);

  useEffect(() => {
    textConverter.setInputCaseType(inputCaseType);
    textConverter.setOutputCaseType(outputCaseType);

    const newConvertedText = textConverter.convert(text);

    setConvertedText(newConvertedText);
  }, [text, inputCaseType, outputCaseType]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          py: 6,
          maxWidth: 800,
          width: "90%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <SelectComponent
            label="Input Case Type"
            options={CASE_TYPES}
            value={inputCaseType}
            setValue={setInputCaseType}
          />
          <TextInput text={text} setText={setText} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <SelectComponent
            label="Output Case Type"
            options={CASE_TYPES}
            value={outputCaseType}
            setValue={setOutputCaseType}
          />
          <TextOutput text={convertedText} />
        </Box>
      </Box>
    </Container>
  );
};

export default CaseConverter;

type TextOuputProps = {
  text: string;
};

function TextOutput({ text }: TextOuputProps) {
  return (
    <Box
      sx={{
        boxShadow: "rgba(71, 75, 255, 0.075) 0px 6px 6px",
        border: "1px solid #777",
        borderRadius: "6px",
        padding: "20px",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      <Typography
        color="initial"
        width="90%"
        whiteSpace="pre-wrap"
        fontSize="20px"
        sx={{
          wordBreak: "break-word",
        }}
      >
        {text}
      </Typography>
      <CopyButton data={text} variant="contained" />
    </Box>
  );
}

type TextInputProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function TextInput({ text, setText }: TextInputProps) {
  return (
    <TextField
      label="Enter Text"
      variant="outlined"
      placeholder=" hello world = hello_world"
      multiline
      rows={4}
      fullWidth
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      sx={{ fontSize: "20px" }}
      InputProps={{
        endAdornment: (
          <IconButton
            onClick={() => {
              setText("");
            }}
          >
            <ClearIcon />
          </IconButton>
        ),
      }}
    />
  );
}
