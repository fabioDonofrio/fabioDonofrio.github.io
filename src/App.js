import * as React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './Home';
import './App.css';
import WhoAreWe from "./WhoAreWe";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

function App() {
  let defaultTheme = createTheme({
    palette: {
      background: {
        default: '#252b39',
      },
      primary: {
        main: '#3b414d',
        contrastText: "#ffffff"
      },
      secondary: {
        main: '#BDD054',
        contrastText: "#252b39"
      },
    }
  });


  defaultTheme = createTheme(defaultTheme, {
    typography: {
      h2: {
        fontFamily: "League Gothic",
        padding: "15px 0",
        color: "#fff"
      },
      h3: {
        fontFamily: "League Gothic",
        padding: "7px 0",
        color: "#BDD054"
      },
      h4: {
        fontFamily: "League Gothic",
        padding: "5px 0"
      },
      h5: {
        fontFamily: "DM Serif Display",
        color: "#fff",
        fontWeight: "bold",
        fontStyle: "italic"
      },
      h6: {
        fontFamily: "DM Serif Display",
        color: "#BDD054",
        fontWeight: "bold"
      },
      h7: {
        fontFamily: "League Gothic",
        color: "#fff"
      },
      string: {
        fontFamily: "DM Serif Display"
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: defaultTheme.palette.primary.main,
            color: defaultTheme.palette.primary.contrastText
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            display: "flex",
            flexDirection: "column",
            gap: "0px"
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            overflowX: 'auto',
            [defaultTheme.breakpoints.down('md')]: {
              justifyContent: "flex-start",
              gap: "0.9%"
            },
            [defaultTheme.breakpoints.up('md')]: {
              gap: "2.5%",
              justifyContent: "center"
            },
            position: "sticky",
            backgroundColor: defaultTheme.palette.primary.light,
            color: defaultTheme.palette.primary.contrastText,
            fontFamily: "League Gothic",
            fontSize: "25px"
          }
        }
      }
    }
  });

  defaultTheme = responsiveFontSizes(defaultTheme);



  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/chi-siamo"
          element={<WhoAreWe />}
        />
      </>
    ),
    {
      basename: '/polo-musicale-artena'
    }
  );
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
