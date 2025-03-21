import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { SearchBar } from './'

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
            position: 'sticky',
            background: '#000',
            top: 0,
            justifyContent: 'space-between',
        }}
    >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/myTube.png" alt="logo" width={50} height={60} />
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar
