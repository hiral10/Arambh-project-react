import { Box, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import { Search } from "@mui/icons-material";
import './Header.css'
const Header=()=>{
    return(
        <Box className="header">
        <Box className="header-title">
        <Typography variant="h5" color="primary">Arambh Institute</Typography>
      </Box>
      <Stack className="search-field">
          <TextField
            className="search-desktop"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search className="search-bar" color="primary" />
                </InputAdornment>
              ),
            }}
            placeholder="Search"
            name="search"
            
          />
           {/* <TextField
           className="search-desktop"
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="Search"
        /> */}
        </Stack>
        
      </Box>
    )
}
export default Header