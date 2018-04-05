/**
 * SearchFormWidget
 *
 * 検索フォーム
 *
 * @package Components
 * @since 2018/XX/XX
 */
import SearchTextBoxParts from "../../parts/SearchTextBoxParts";
import SearchSubmitButtonParts from "../../parts/SearchSubmitButtonParts";

const SearchFormWidget = () => (
    <div className="search__box">
        <SearchTextBoxParts />
        <SearchSubmitButtonParts />
        <style jsx>{`
        .search__box input {
            height: 41px;
            line-height: 1.1;
            margin: 0;
            padding-left: 36px;
            vertical-align: middle;
            outline: #000 0;
            font-size: 14px;
        };
    `}</style>
    </div>
)

export default SearchFormWidget;
