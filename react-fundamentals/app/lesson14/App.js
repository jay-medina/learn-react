import * as React from 'react';

const PersonRow = (props) => {
    return (
        <tr>
          <td>{props.data.id}</td><td>{props.data.name}</td>
        </tr>
    )
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: "Jose Medina"},
                {id: 2, name: "Samuel Medina"},
                {id: 3, name: "Johnnie Medina"},
                {id: 4, name: "Mercy Fernandez"}
            ]
        };
    }
    render() {
        const rows = this.state.data.map( person => {
            return <PersonRow key={person.id} data={person} />
        });

        return (
            <table>
              <tbody>
                {rows}
              </tbody>
            </table>
        )
    }
}

export default App;