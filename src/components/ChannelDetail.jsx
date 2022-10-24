import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        };

        // fetchFromAPI(`search?channelId=${id}part=snippet&order=date`).then((data) => setVideos(data?.items));

        // console.log('Channel Detail', channelDetail);

        fetchResults();
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{ background: '#4169e1', zIndex: 10, height: '300px' }} />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>

        </Box>
    )
}

export default ChannelDetail