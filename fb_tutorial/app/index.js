import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    }
  }
  getStatus(squares) {
    const status = `Next player: ${this.getNextValue()}`;
    const winner = calculateWinner(squares)
    if (winner) {
      return `Winner: ${winner}`;
    }

    return status;
  }
  getNextValue() {
    return this.state.xIsNext ? 'X' : 'O';
  }
  getCurrentBoard() {
    const {history} = this.state;
    return history[history.length - 1];
  }
  handleClick(i) {
    const current = this.getCurrentBoard();
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.getNextValue();
    this.setState({
      history: this.state.history.concat([
        {
          squares: squares
        }
      ]),
      xIsNext: !this.state.xIsNext
    });
  }
  renderMoves() {
    return this.state.history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });
  }
  render() {
    const current = this.getCurrentBoard();

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick.bind(this)} />
        </div>
        <div className="game-info">
          <div>{this.getStatus(current.squares)}</div>
          <ol>{this.renderMoves()}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}