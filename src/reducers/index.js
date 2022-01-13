const songReducer = () => {
    return [
        {title: 'Hard on Yourself', duration: '2:40'},
        {title: 'West Coast', duration: '4:05'},
        {title: 'LA Story', duration: '4:15'},
        {title: 'Never Gonna Give You Up', duration: '4:30'},
        {title: 'I Want It That Way', duration: '4:00'}
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};