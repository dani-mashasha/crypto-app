import { CircularProgress, Grid, LinearProgress, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

const Loader = () => {
    return(
<Box sx={{ width: "100%", minHeight:"70vh"}}>
       <LinearProgress />
       <CircularProgress style={{display:"flex", margin:"auto", padding:"100px"}}/>
    </Box>
    )
}
export default Loader;