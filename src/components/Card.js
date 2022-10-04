import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    const trunfoCheck = () => {
      if (cardTrunfo) {
        return (
          <p
            name="cardTrunfo"
            data-testid="trunfo-card"
          >
            Super Trunfo
          </p>
        );
      }
    };
    return (
      <div>
        <p name="cardName" data-testid="name-card">{ cardName }</p>
        <img
          name="cardImage"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p name="cardDescription" data-testid="description-card">{ cardDescription }</p>
        <p name="cardAttr1" data-testid="attr1-card">{ cardAttr1 }</p>
        <p name="cardAttr2" data-testid="attr2-card">{ cardAttr2 }</p>
        <p name="cardAttr3" data-testid="attr3-card">{ cardAttr3 }</p>
        <p name="cardRare" data-testid="rare-card">{ cardRare }</p>
        { trunfoCheck() }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
