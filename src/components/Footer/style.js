import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
main:{
  backgroundColor: "#666055" ,
 padding:"50px",
 textAlign:"center"
},
item: {
  "& ul" :{
    color:"white",
    listStyleType: "none",
    padding: 0
  }
}
}));

export default useStyles;
