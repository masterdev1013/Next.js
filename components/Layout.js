import Head from 'next/head';

function Layout({title , keywords , description , children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>
            {children}
        </div>
    )
}

export default Layout;


Layout.defaultProps = {
    title: 'This is my app title',
    description: 'This is my app description',
    keywords: 'web, javascript, react, next'
}