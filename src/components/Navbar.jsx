import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsFillCollectionPlayFill } from 'react-icons/bs'

import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            {/* <img src={logo} alt="logo" height={45} backgroundColor='#4169e1' /> */}
            <BsFillCollectionPlayFill color='#4169e1' size={45} />
        </Link>
        <SearchBar />

    </Stack>
)

export default Navbar