import react from 'react';
import styles from './Landing.styles'
import Nav from '../../components/Nav/Nav.component'

const LandingPage = (props) => {
    const { history } = props;

    return (
        <>
        <Nav history={history} />
        <div style={styles.main}>
            <h2 style={styles.head}>Landing Page</h2>
        </div>
        </>
    );
}

export default LandingPage;