import { AppBar, Toolbar, Typography, Container, Link, Divider} from '@material-ui/core';
import {Logo, Item} from './styles';

export default function Template(props) {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
              <Typography variant='h6' className="home-logo">
                <Link href={"/"} color="inherit">
                  Fake Store
                </Link>
              </Typography>

            <Divider orientation="vertical" flexItem />
            
            <Typography variant='h6' className="home-item">
                <Link href={"/users"} color="inherit" >
                  Users
                </Link>
              
                <Link href={"/users/create"} color="inherit" >
                  Create User
                </Link>              
            </Typography>

          </Toolbar>
        </AppBar>
      </header>
      
      <Container>
        {props.children}
      </Container>
    </>
  )
}
