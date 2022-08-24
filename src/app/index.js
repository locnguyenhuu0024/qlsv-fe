import { Layout } from 'antd';
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";

const style = {
    height: '100vh',
    backgroundColor: 'grey'
}

function App(){
    return (
        <Layout
            style={style}
        >
            <Header />
            <Body />
            <Footer />
        </Layout>
    );
}

export default App;