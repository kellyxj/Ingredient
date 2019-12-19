import React from "react";
import API from "../../utils/API";

class recipe extends React.Component {
  state = {
    search: "",
    result: []
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRecipes(this.state.search);
  };

  recipeSearch = query => {
    API.search(query).then(res => this.setState({ result: res.data }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        {" "}
        <div className="tile is-ancestor">
          <div className="container">
            <div className="box has-background-white">
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-bold has-background-grey-light">
                    <p className="title has-text-white">Search:</p>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-success"
                          type="text"
                          placeholder="What're you hungry for?"
                        />
                        <button
                          className="button is-success"
                          onClick={recipeSearch()}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child notification is-bold is-success">
                  <p className="title">Recipe Number One</p>
                  <p className="subtitle">
                    This lovely dish is the first one we found! It incorporates
                    flavors and scents from many, many different cultures around
                    the...
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
export default recipe;
