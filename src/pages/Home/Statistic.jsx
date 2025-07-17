const Statistic = () => {
  return (
    <div className="statistics">
      <div id="stat_table" className="table_block">
        <div className="table_block__controls">
          <div
            className="table_block__controls__tabs"
            style={{ display: "flex" }}
          >
            <button data-type="bets" className="active_tab">
              All bets
            </button>
            <button data-type="myBets">My bets</button>
            <button data-type="previousBets" className="fadeIn">
              Previous
            </button>
          </div>
          <div
            id="info_panel_portrait"
            className="info_panel info_panel__portrait"
          >
            <div>
              <div className="info_panel__item">
                <span
                  id="info_panel__online_label_portrait"
                  className="info_panel__item_key"
                >
                  Online:
                </span>
                <span
                  id="info_panel__online_value_portrait"
                  className="info_panel__item_value"
                >
                  51
                </span>
              </div>
              <div className="info_panel__item">
                <span
                  id="info_panel__bets_label_portrait"
                  className="info_panel__item_key"
                >
                  Bets:
                </span>
                <span
                  id="info_panel__bets_value_portrait"
                  className="info_panel__item_value"
                >
                  22
                </span>
              </div>
            </div>
          </div>
        </div>
        <table id="table" className="table_block__table">
          <thead className="table_block__table_head">
            <tr>
              <th
                id="tabs_header__operator_tx_id"
                className="table_block__cell"
                style={{ display: "none" }}
              >
                <span>Id</span>
              </th>
              <th id="tabs_header__users_name" className="table_block__cell">
                Username
              </th>
              <th id="tabs_header__bets" className="table_block__cell">
                bet
              </th>
              <th id="tabs_header__takes" className="table_block__cell">
                x
              </th>
              <th id="tabs_header__wins" className="table_block__cell">
                win
              </th>
            </tr>
          </thead>
          <tbody className="table_block__table_body">
            <tr data-owner="other">
              <td>
                <span>6547157</span>
              </td>
              <td>
                <span>100.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6328728</span>
              </td>
              <td>
                <span>100.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6643716</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>5964772</span>
              </td>
              <td>
                <span>500.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>4789968</span>
              </td>
              <td>
                <span>100.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6646479</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6265348</span>
              </td>
              <td>
                <span>40.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6509042</span>
              </td>
              <td>
                <span>24.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6429691</span>
              </td>
              <td>
                <span>502.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other" className="collected">
              <td>
                <span>6562450</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>1.27</span>
              </td>
              <td>
                <span>25.40 inr</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6592171</span>
              </td>
              <td>
                <span>17 000.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6562450</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6450735</span>
              </td>
              <td>
                <span>36.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6509042</span>
              </td>
              <td>
                <span>24.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6643171</span>
              </td>
              <td>
                <span>40.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6537234</span>
              </td>
              <td>
                <span>50.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6636392</span>
              </td>
              <td>
                <span>24.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6537234</span>
              </td>
              <td>
                <span>40.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>5451592</span>
              </td>
              <td>
                <span>998.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6646610</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6643667</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6469785</span>
              </td>
              <td>
                <span>72.00 lkr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table_block__footer">
          <div>
            <span data-localization-key="footer_0">This game is</span>
            <button className="back_panel rounded provably_fair_button">
              <span data-localization-key="footer_1">Provably Fair</span>
            </button>
          </div>
          <div>
            <span data-localization-key="footer_2">Powered by</span>
            <span>
              <img
                src="assets/images/onlyplay_logo_724cc8d453c1fa670c6e.svg"
                alt="onlyplay"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
