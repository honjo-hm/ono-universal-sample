/**
 * IndexContainer
 *
 * サンプルTOPのページ構成
 *
 * @package Components
 * @since 2018/XX/XX
 */
import HeaderWidget from "../widgets/header/HeaderWidget";
import SearchFormWidget from "../widgets/search/SearchFormWidget";

const IndexContainer = () => (
    <div>
        <HeaderWidget />
        <SearchFormWidget />
    </div>
)

export default IndexContainer;