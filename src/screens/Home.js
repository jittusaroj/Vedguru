import React from 'react'

const Home = () => {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Title" subtitle={'Subtitle'} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
        </>
    )
}

export default Home
