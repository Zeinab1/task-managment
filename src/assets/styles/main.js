import bgImage from '../images/bg-01.jpg'

const customInputStyle = {
  container: {
    backgroundImage: `url(${bgImage})`,
    width:"100%",
    minHeight:"100vh",

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexFlow: "column wrap",


    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    position:"relative",
    zIndex:"1",

    '@media only screen and (max-width: 300px)': {
        background:"none"
    
      
  },

    "&::before":{
      content:"''",
      display:"block",
      position:"absolute",
      width:"100%",
      height:"100%",
      top:"0",
      left:"0",
      zIndex:"-1",
      backgroundColor: "rgba(255,255,255,0.9)",
    },
   
},
  wrapLogin:{
    // width:"200px",
    borderRadius:"10px",
    margin:"40px 0",

    background:"#9152f8",
    background: "-webkit-linear-gradient(top, #7579ff, #b224ef)",
    background: "-o-linear-gradient(top, #7579ff, #b224ef)",
    background: "-moz-linear-gradient(top, #7579ff, #b224ef)",
    background: "linear-gradient(top, #7579ff, #b224ef)",
     '@media only screen and (min-width: 300px)': {
        width:"300px",
        padding:"55px 10px 37px 10px"
    },
    '@media only screen and (min-width: 340px)': {
      width:"320px",
      padding:"55px 10px 37px 10px"

  },
  '@media only screen and (min-width: 640px)': {
    width:"500px",
    padding: "55px 55px 37px 55px",

},
  
  },
 
  loginFormlogo:{
    fontSize:"60px",
    width:"120px",
    height:"120px",
    backgroundColor:"#fff",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"0 auto"
  },
  loginFormTitle:{
    fontWeight:"400",
    color:"#fff",
    fontSize:"30px",
    textTransform: "uppercase",
    lineHeight:"1.2",
    textAlign:"center",
    display:"block",
    paddingTop:"27px",
    paddingBottom:"34px"
  },
  wrapInput:{
    marginBottom:"30px",
  },
  loginFormBtn:{
    "&.MuiButton-root":{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"0 auto",
      "&:hover":{
        backgroundColor:"#fff"
      }
    },
    "&.MuiButton-text":{
      color:"#555555",
      backgroundColor:"#fff",
      borderRadius:"25px",
      padding:"0 25px",
      height:"50px",
      minWidth:"120px"
    }
    
  },
  loginFormForget:{
    color:"#fff",
    textAlign:"center",
    paddingTop:"5px",
    paddingBottom:"20px",
    cursor:"pointer",
  },
  loginFormAccount:{
    textAlign:"center",
    color:"#fff",
    paddingTop:"20px",
    cursor:"pointer",
   
    "& span":{
      color:"#555555",
      fontWeight:"bold",
      TextDecoration:"none",
    }
  },
  // style of tasks page
  todosBody:{
    // backgroundColor:"#9152f8",
    // paddingTop:"100px",
    // paddingBottom:"100px",
    // position:"relative",
    // height:"100vh"
  },
 
 todos:{
   backgroundColor:"#fff",
   width:"90%",
   height:"60px",
   borderRadius:"10px",
   margin:"10px auto 0 auto"
 },
 addTitle:{
   color:"#fff",
 },
 noBorder:{
   border:"none"
 }

  };
  
  export default customInputStyle;