import { PageHeader } from 'antd';

const HeaderPage = (pro) => {
return (
  <PageHeader
    className="site-page-header"
    onBack={() => pro.onback}
    title={pro.title}
    subTitle={pro.subTitle}
  />
)
}

export default HeaderPage
