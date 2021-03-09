import view from '../../assets/view.jpg'

const styles = {
    main: {
        display: 'flex',
        flex: 1,
        backgroundImage: `url(${view})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
    },
    head: {
        fontFamily: "Poiret One",
        fontStyle: 'cursive',
        color: 'white'
    }
}

export default styles;