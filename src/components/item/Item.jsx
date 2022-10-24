import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export default function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        //bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        //color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 10,
        fontSize: "1rem",
        fontWeight: "700",
        height: "85vh",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
