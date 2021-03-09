import react from 'react';
import styles from './About.styles'
import Nav from '../../components/Nav/Nav.component'

const AboutPage = (props) => {

    return (
        <>
        <Nav {...props} />
        <div style={styles.main}>
            <h2 style={styles.head}>About Page</h2>
        </div>
        </>
    );
}

export default AboutPage;