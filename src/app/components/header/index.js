import { Layout, Space, Typography } from 'antd';

const style = {
    textAlign: 'center'
}
function Headerf(){
    return (
        <Layout.Header
            style={style}
        >
            <Space
                size={'middle'}
            >
                <Typography.Title
                    style={{color: 'white'}}
                >
                    Quản lý danh sách sinh viên
                </Typography.Title>
            </Space>
        </Layout.Header>
    )
}

export default Headerf;