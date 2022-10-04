import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const superTrunfo = () => {
      if (hasTrunfo === false) {
        return (
          <label htmlFor="trunfo-input">
            Super Trunfo?
            {' '}
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            <p />
          </label>
        );
      }
      return (
        <span>
          Você já tem um Super Trunfo em seu baralho
          <p />
        </span>
      );
    };
    return (
      <form>
        <label htmlFor="text">
          <br />
          <input
            placeholder="Nome"
            name="cardName"
            id="text"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="textarea">
          <br />
          <input
            placeholder="informacoes"
            name="cardDescription"
            id="textarea"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="number">
          <br />
          <input
            placeholder="Attack"
            name="cardAttr1"
            id="number"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="number2">
          <br />
          <input
            placeholder="Defesa"
            name="cardAttr2"
            id="number2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="number3">
          <br />
          <input
            placeholder="Especial"
            name="cardAttr3"
            id="number3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="image">
          <br />
          <input
            placeholder="Imagem"
            name="cardImage"
            id="image"
            type="text1"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="rare">
          Raridade:
          <select
            id="rare"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        { superTrunfo() }
        <br />
        <br />
        <button
          id="botao"
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
