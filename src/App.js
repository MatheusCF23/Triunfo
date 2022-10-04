import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    savedCards: [],
  };

  target = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox') ? (target.checked) : (target.value);
    this.setState({ [name]: value });
  };

  superTrunfo = () => {
    const { savedCards } = this.state;
    const hasTrunfo = savedCards.some((card) => card.cardTrunfo === true);

    return hasTrunfo;
  };

  saveButton = ([cardAttr1, cardAttr2, cardAttr3], ...inputValues) => {
    const validationInput = inputValues.every((value) => value.trim().length > 0);
    const attackCards = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const maximoCard = 90;
    const powerTotal = 210;
    const validationCards = attackCards.every(
      (cardAttr) => cardAttr <= maximoCard && cardAttr >= 0,
    );
    const attackTotal = attackCards.reduce((acc, attr) => acc + attr);
    const validationTotal = attackTotal <= powerTotal;
    return !(validationInput && validationCards && validationTotal);
  };

  saveCard = () => {
    const { savedCards, ...cardData } = { ...this.state };
    const copyCards = [...savedCards];
    copyCards.push(cardData);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      savedCards: copyCards,
    });
  };

  deleteCard = (card) => {
    const { savedCards } = this.state;
    const saveDelete = savedCards.filter((savedCard) => savedCard !== card);

    this.setState({ savedCards: saveDelete });
  };

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
      savedCards,
    } = this.state;

    const { target, superTrunfo, saveButton, saveCard, deleteCard } = this;

    const saveButtonValidation = saveButton(
      [cardAttr1, cardAttr2, cardAttr3],
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    );

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ superTrunfo() }
          onInputChange={ target }
          isSaveButtonDisabled={ saveButtonValidation }
          onSaveButtonClick={ saveCard }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div id="deck-display">
          Deck
          <p />
          { savedCards.map((card) => (
            <>
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                key={ `delete-${card.cardName}` }
                type="button"
                data-testid="delete-button"
                onClick={ () => deleteCard(card) }
              >
                Excluir
              </button>
              <p />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
