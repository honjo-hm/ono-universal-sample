/**
 * HeaderWidget
 *
 * ヘッダ
 *
 * @package Components
 * @since 2018/XX/XX
 */
import Head from 'next/head'

const HeaderWidget = () => (
    <div className="container-fluid">
    <Head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/*language=PostCSS*/}
        <style jsx global>{`//global stylesheet
        `}
        </style>
    </Head>
    <h2>Headerですわ</h2>
    </div>
)
  
export default HeaderWidget;