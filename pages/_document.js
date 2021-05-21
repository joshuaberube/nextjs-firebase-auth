import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link 
                    rel="stylesheet" 
                    href="https://use.typekit.net/krt8fkp.css" 
                />
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
            </Html>
        )
    }
}

export default MyDocument