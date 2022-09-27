import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="text">
          <input id="text" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="textarea">
          <input id="textarea" type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="number1">
          <input id="number1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="number2">
          <input id="number2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="number3">
          <input id="number3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="img">
          <input id="img" type="img" data-testid="image-input" />
        </label>
        <label htmlFor="select">
          <select id="select" type="select" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          <input id="check" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
