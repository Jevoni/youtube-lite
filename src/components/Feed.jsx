import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: 'auto', md: '89vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Box display='flex' flexWrap='wrap' width='200px'>
                    <Typography className="copyright" sx={{ mt: 1.5, color: '#fff', fontSize: '12px' }}>
                        Made by <a href='https://jalenj.com/' target='_blank' style={{ textShadow: '1.5px 1.5px black', color: '#F55887', fontWeight: 'bold', textDecoration: 'none' }}>Jalen Johnson</a> using <a href='https://reactjs.org/' target='_blank' style={{ textShadow: '1.5px 1.5px black', color: 'skyblue', fontWeight: 'bold', textDecoration: 'none' }}>React.js</a> and <a href='https://rapidapi.com/ytdlfree/api/youtube-v31/' target='_blank' style={{ textShadow: '1.5px 1.5px black', color: 'red', fontWeight: 'bold', textDecoration: 'none' }}>Youtube v3 API</a>
                    </Typography>
                </Box>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography fontSize='25px'
                    fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#4169e1' }}
                    >videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed