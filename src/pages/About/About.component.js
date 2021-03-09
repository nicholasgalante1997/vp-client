import react from 'react';
import styles from './Landing.styles'
import Nav from '../../components/Nav/Nav.component'

const AboutPage = (props) => {
    const { history } = props;

    return (
        <>
        <Nav history={history} />
        <div style={styles.main}>
            <h2 style={styles.head}>About Page</h2>
        </div>
        </>
    );
}

export default AboutPage;