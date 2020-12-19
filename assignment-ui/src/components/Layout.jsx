import React from 'react'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Header from './Header'
import Sidebar from './Sidebar'
import Kid from '../kid.png'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


const Layout = ({handleLogout}) => {

    const data = ["Alex Prasad", "Day1", "Day2"];
    const width = 300;
    const height = 650;

    const [xPos, setXPos] = React.useState(-width);

    const handleSideBar = () => {
        xPos < 0 ? setXPos(0) : setXPos(-width)
    }

   

    return (
        <div>
            <Header handleLogout={handleLogout} handleSideBar={handleSideBar}/>
            <Sidebar width={width} height={height} xPos={xPos} >
                {data.map((el) => (
                <h5>{el}</h5>
            ))}
                <img src={Kid}></img>
            </Sidebar>
        </div>
    )
}

export default Layout
export {TabPanel}