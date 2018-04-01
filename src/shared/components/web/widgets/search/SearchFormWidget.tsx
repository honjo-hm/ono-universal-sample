/**
 * SearchForm
 *
 * 検索用TextBox
 *
 * @package Components
 * @since 2018/XX/XX
 */
import SearchTextBoxParts from "../../parts/SearchTextBoxParts";
import SearchSubmitButtonParts from "../../parts/SearchSubmitButtonParts";

const SearchFormWidget = () => (
    <li>
        <SearchTextBoxParts />
        <SearchSubmitButtonParts />
    </li>
)
  
export default SearchFormWidget;